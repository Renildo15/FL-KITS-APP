import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import AddButton from '@/components/add-kits/add-button';
import RecentClubsList from '@/components/add-kits/recent-clubs-list';

export default function AddKits() {
  return (
    <View style={styles.container}>
      <AddButton/>
      <RecentClubsList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
});
