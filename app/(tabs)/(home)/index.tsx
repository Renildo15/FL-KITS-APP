import { Text, View } from '@/components/Themed';
import CardMain from '@/components/home/card-main';
import ClubsList from '@/components/home/clubs-list';
import { styles } from './styles';
import { UseClubs } from '@/hooks/useClubs';

export default function Home() {

  const { result, isError, isLoading} = UseClubs();

  const firstClub = result.results.length > 0 ? result.results[0] : null;

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