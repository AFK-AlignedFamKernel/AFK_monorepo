import {useState} from 'react';
import {KeyboardAvoidingView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {TextButton} from '../../components';
import {useStyles} from '../../hooks';
import {DefiScreenProps} from '../../types';
import {SelectedTab} from '../../types/tab';
import stylesheet from './styles';

export const Defi: React.FC<DefiScreenProps> = ({navigation}) => {
  const styles = useStyles(stylesheet);
  const [selectedTab, setSelectedTab] = useState<SelectedTab | undefined>(SelectedTab.CREATE_NOTE);

  const handleTabSelected = (tab: string | SelectedTab, screen?: string) => {
    setSelectedTab(tab as any);
    if (screen) {
      navigation.navigate(screen as any);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top', 'left', 'right']} style={styles.header}>
        <TextButton style={styles.cancelButton} onPress={navigation.goBack}>
          Cancel
        </TextButton>
      </SafeAreaView>

      <KeyboardAvoidingView behavior="padding" style={styles.content}>
        {/* <TabSelector
          activeTab={selectedTab}
          handleActiveTab={handleTabSelected}
          buttons={TABS_FORM_CREATE}
          addScreenNavigation={false}
        ></TabSelector> */}
        <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.content}>
          <Text style={styles.text}>DeFi, Ramp and more soon</Text>
          <Text style={styles.text}>Stay tuned for the AFK Fi</Text>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
};
