import '../../../applyGlobalPolyfills';

import {CashuMint, MintQuoteResponse, Proof} from '@cashu/cashu-ts';
import {addProofsSpent, getProofs, useCashu, useCashuStore, useNostrContext} from 'afk_nostr_sdk';
import {useCashuBalance, useGetCashuWalletsInfo} from 'afk_nostr_sdk/src/hooks/cashu';
import {canUseBiometricAuthentication} from 'expo-secure-store';
import React, {useEffect, useState} from 'react';
import {Platform, View} from 'react-native';
import {Text, TextInput} from 'react-native';

import {useStyles, useTheme} from '../../hooks';
import {useDialog, useToast} from '../../hooks/modals';
import {retrieveAndDecryptCashuMnemonic, retrievePassword} from '../../utils/storage';
import stylesheet from './styles';

export const BalanceCashu = () => {
  const {
    wallet,
    connectCashMint,
    connectCashWallet,
    requestMintQuote,
    generateMnemonic,
    derivedSeedFromMnenomicAndSaved,
    mintUrl,
    setMintUrl,
  } = useCashu();
  const {ndkCashuWallet, ndkWallet} = useNostrContext();

  const {balance, setBalance} = useCashuBalance();

  // const [mintUrl, setMintUrl] = useState<string | undefined>("https://mint.minibits.cash/Bitcoin")
  const [mint, setMint] = useState<CashuMint | undefined>(
    mintUrl ? new CashuMint(mintUrl) : undefined,
  );

  const {isSeedCashuStorage, setIsSeedCashuStorage} = useCashuStore();
  const cashuWallets = useGetCashuWalletsInfo();
  console.log('cashuWallets', cashuWallets);
  const lenWallet = cashuWallets?.data?.pages?.length ?? 0;
  console.log('lenWallet', lenWallet);

  const styles = useStyles(stylesheet);

  const [quote, setQuote] = useState<MintQuoteResponse | undefined>();
  const [mintsUrls, setMintUrls] = useState<string[]>(['https://mint.minibits.cash/Bitcoin']);
  const [isInvoiceModalVisible, setIsInvoiceModalVisible] = useState(false);
  const [isZapModalVisible, setIsZapModalVisible] = useState(false);
  const [hasSeedCashu, setHasSeedCashu] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [zapAmount, setZapAmount] = useState('');
  const [zapRecipient, setZapRecipient] = useState('');

  // const [connectionStatus, setConnectionStatus] = useState('disconnected');
  // const [connectionData, setConnectionData] = useState<any>(null);

  const {theme} = useTheme();
  const [newSeed, setNewSeed] = useState<string | undefined>();

  const {showDialog, hideDialog} = useDialog();

  const {showToast} = useToast();

  const handleGenerateWallet = async () => {
    const wallet = await ndkWallet?.createCashuWallet();

    console.log('wallet', wallet);
  };

  const getProofsWalletAndBalance = async () => {
    const proofsLocal = getProofs();
    if (proofsLocal) {
      /** TODO clean proofs */
      let proofs: Proof[] = JSON.parse(proofsLocal);
      const proofsSpent = await wallet?.checkProofsSpent(proofs);
      // console.log("proofsSpent", proofsSpent)
      proofs = proofs?.filter((p) => !proofsSpent?.includes(p));

      if (proofsSpent) {
        await addProofsSpent(proofsSpent);
      }
      const totalAmount = proofs.reduce((s, t) => (s += t.amount), 0);
      console.log('totalAmount', totalAmount);
      setBalance(totalAmount);
    }
  };

  useEffect(() => {
    (async () => {
      const biometrySupported = Platform.OS !== 'web' && canUseBiometricAuthentication?.();

      if (biometrySupported) {
        const password = await retrievePassword();
        if (!password) return;
        const storeSeed = await retrieveAndDecryptCashuMnemonic(password);

        if (storeSeed) setHasSeedCashu(true);

        if (isSeedCashuStorage) setHasSeedCashu(true);
      }
    })();

    (async () => {
      console.log('ndkCashuWallet', ndkCashuWallet);
      console.log('ndkWallet', ndkWallet);

      const availableTokens = await ndkCashuWallet?.availableTokens;
      console.log('availableTokens', availableTokens);

      const mintBalances = await ndkCashuWallet?.mintBalances;
      console.log('mintBalances', mintBalances);

      console.log('mintBalances', mintBalances);
      const wallets = await ndkWallet?.wallets;
      console.log('wallets', wallets);

      const balance = await ndkCashuWallet?.balance;

      console.log('balance', balance);

      if (mint) {
        const mintBalance = await ndkCashuWallet?.mintBalance(mint?.mintUrl);
        console.log('mintBalance', mintBalance);
      }
    })();

    getProofsWalletAndBalance();
  }, []);

  return (
    // <SafeAreaView style={styles.safeArea}>
    <View
    // contentContainerStyle={styles.scrollView}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Your balance</Text>

          <Text style={styles.text}>{balance}</Text>
        </View>

        <View>
          <Text style={styles.text}>Connect to</Text>
        </View>
        <View style={styles.content}>
          <TextInput
            placeholder="Mint URL"
            value={mintUrl}
            onChangeText={setMintUrl}
            style={styles.input}
          />
        </View>

        {/* 
          <View>
            <Text>You have {lenWallet} ecash wallets</Text>
            <Button 
            onPress={() => {
              // handleGenerateWallet()
            }}
            >Generate wallet</Button> 
          </View>
        */}
      </View>
    </View>
    // </SafeAreaView>
  );
};
