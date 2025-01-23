import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import CardMain from '@/components/home/card-main';
import ClubsList from '@/components/home/clubs-list';

export default function Home() {
  return (
    <View style={styles.container}>
      <CardMain/>
      <ClubsList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
