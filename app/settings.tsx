import {  StyleSheet  } from 'react-native';
import {  View } from '@/components/Themed';
import SettingsButton from '@/components/settings/settings-button';

export default function Settings() {
  return (
    <View style={styles.container}>
      <View style={{width:"100%", padding:10}}>
          <SettingsButton icon='sun-o' isThemed={true} text={"Tema"} />
          <SettingsButton icon='info' isThemed={false} text={"Sobre o App"} />
          <SettingsButton icon='group' isThemed={false} text={"Créditos"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
