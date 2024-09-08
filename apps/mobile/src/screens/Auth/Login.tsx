import { useNavigation } from '@react-navigation/native';
import { useAuth, useCashu, useNip07Extension } from 'afk_nostr_sdk';
import { canUseBiometricAuthentication } from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';

import { LockIcon } from '../../assets/icons';
import { Button, Input, TextButton } from '../../components';
import { useTheme } from '../../hooks';
import { useDialog, useToast } from '../../hooks/modals';
import { Auth } from '../../modules/Auth';
import { AuthLoginScreenProps, MainStackNavigationProps } from '../../types';
import { getPublicKeyFromSecret } from '../../utils/keypair';
import {
  retrieveAndDecryptCashuMnemonic,
  retrieveAndDecryptPrivateKey,
  retrievePassword,
  retrievePublicKey,
  storeCashuMnemonic,
} from '../../utils/storage';

export const Login: React.FC<AuthLoginScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const setAuth = useAuth((state) => state.setAuth);


  const {setIsSeedCashuStorage} = useAuth()
  const [password, setPassword] = useState('');

  const { showToast } = useToast();
  const { showDialog, hideDialog } = useDialog();
  const { getPublicKey } = useNip07Extension();
  const { generateMnemonic } = useCashu()

  const navigationMain = useNavigation<MainStackNavigationProps>();

  useEffect(() => {
    (async () => {
      const biometrySupported = Platform.OS !== 'web' && canUseBiometricAuthentication?.();

      if (biometrySupported) {
        const storedPassword = await retrievePassword();
        if (storedPassword) setPassword(storedPassword);
      }
    })();
  }, []);

  const handleLogin = async () => {
    if (!password) {
      showToast({ type: 'error', title: 'Password is required' });
      return;
    }

    const privateKey = await retrieveAndDecryptPrivateKey(password);
    if (!privateKey || privateKey.length !== 32) {
      showToast({ type: 'error', title: 'Invalid password' });
      return;
    }
    const privateKeyHex = privateKey.toString('hex');

    const storedPublicKey = await retrievePublicKey();
    const publicKey = getPublicKeyFromSecret(privateKeyHex);

    if (publicKey !== storedPublicKey) {
      showToast({ type: 'error', title: 'Invalid password' });
      return;
    }

    const mnemonicSaved = await retrieveAndDecryptCashuMnemonic(password)
    console.log("mnemonicSaved",mnemonicSaved)
    setIsSeedCashuStorage(true)

    if (!mnemonicSaved) {
      const mnemonic = await generateMnemonic()
      console.log("mnemonic",mnemonic)
      await storeCashuMnemonic(mnemonic, password)
      setIsSeedCashuStorage(true)
    }

    setAuth(publicKey, privateKeyHex);

    if (publicKey && privateKeyHex) {
      navigationMain.navigate('Feed');
    }
  };

  const handleCreateAccount = () => {
    showDialog({
      title: 'WARNING',
      description:
        'Creating a new account will delete your current account. Are you sure you want to continue?',
      buttons: [
        {
          type: 'primary',
          label: 'Continue',
          onPress: () => {
            navigation.navigate('CreateAccount');
            hideDialog();
          },
        },
        { type: 'default', label: 'Cancel', onPress: hideDialog },
      ],
    });
  };

  const handleImportAccount = () => {
    showDialog({
      title: 'WARNING',
      description:
        'Creating a new account will delete your current account. Are you sure you want to continue?',
      buttons: [
        {
          type: 'primary',
          label: 'Continue',
          onPress: () => {
            navigation.navigate('ImportKeys');
            hideDialog();
          },
        },
        { type: 'default', label: 'Cancel', onPress: hideDialog },
      ],
    });
  };

  const handleExtensionConnect = () => {
    showDialog({
      title: 'WARNING',
      description: 'Used your Nostr extension.',
      buttons: [
        {
          type: 'primary',
          label: 'Continue',
          onPress: () => {
            getPublicKey();
            // navigation.navigate('ImportKeys');
            // hideDialog();
          },
        },
        { type: 'default', label: 'Cancel', onPress: hideDialog },
      ],
    });
  };

  const handleGoDegenApp = () => {
    // Brind dialog
    navigation.navigate('DegensStack', { screen: 'Games' });
    // showDialog({
    //   title: 'WARNING',
    //   description:
    //     'You are going to visit AFK without a Nostr graph features. Are you sure you want to continue?',
    //   buttons: [
    //     {
    //       type: 'primary',
    //       label: 'Continue',
    //       onPress: () => {
    //         navigation.navigate("DegensStack", { screen: "Games" });
    //         hideDialog();
    //       },
    //     },
    //     { type: 'default', label: 'Cancel', onPress: hideDialog },
    //   ],
    // });
  };

  return (
    <Auth title="Login">
      <Input
        left={<LockIcon color={theme.colors.primary} />}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Enter your password"
      />

      <Button
        block
        style={{ width: 'auto', maxWidth: 130 }}
        variant="secondary"
        disabled={!password?.length}
        onPress={handleLogin}
      >
        Login
      </Button>

      <TextButton onPress={handleCreateAccount}>Create Account</TextButton>

      <View
        style={
          {
            // display: 'flex',
            // flex: 1,
            // flexDirection: 'row',
            // rowGap: 3,
          }
        }
      >
        <TextButton onPress={handleImportAccount}>Import Account</TextButton>
        <TextButton onPress={handleExtensionConnect}>Nostr extension</TextButton>
      </View>

      <TextButton onPress={handleGoDegenApp}>Go degen app</TextButton>
    </Auth>
  );
};
