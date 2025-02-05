import React from 'react';
import { Text, View } from '@/components/Themed';
import CardMain from '@/components/home/card-main';
import ClubsList from '@/components/home/clubs-list';
import { styles } from './styles';
import { useRecentsClubs } from '@/hooks/useRecentsClubs';
import NoData from '@/components/no-data';

export default function Home() {

  const {resultRecentClubs, isError, isLoading} = useRecentsClubs();

  const firstClub = resultRecentClubs.results.length > 0 ? resultRecentClubs.results[0] : null;

  return (
    <View style={styles.container}>
      {isError ? (
        <Text>Erro</Text>
      ) : isLoading ? (
        <Text>Carregando</Text>
      ) : firstClub ? (
        <>
          <CardMain isClickable={true} club={firstClub} />
          <ClubsList />
        </>
      ) : (
        <NoData message="Nenhum clube encontrado" />
      )}
    </View>
  );
}