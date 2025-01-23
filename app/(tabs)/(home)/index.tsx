import { View } from '@/components/Themed';
import CardMain from '@/components/home/card-main';
import ClubsList from '@/components/home/clubs-list';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <CardMain/>
      <ClubsList/>
    </View>
  );
}