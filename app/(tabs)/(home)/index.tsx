import { Text, View } from '@/components/Themed';
import CardMain from '@/components/home/card-main';
import ClubsList from '@/components/home/clubs-list';
import { styles } from './styles';
import { UseClubs } from '@/hooks/useClubs';
import { useRecentsClubs } from '@/hooks/useRecentsClubs';

export default function Home() {

  const { result, isError, isLoading} = UseClubs();
  const {resultRecentClubs} = useRecentsClubs();

  const firstClub = resultRecentClubs.results.length > 0 ? resultRecentClubs.results[0] : null;

  return (
    <View style={styles.container}>
      { isError ? (
        <Text>Erro</Text>
      ) : isLoading ? (
        <Text>Carregando</Text>
      ) : (
        <CardMain isClickable={true} club={firstClub}/>
      )}
      <ClubsList/>
    </View>
  );
}