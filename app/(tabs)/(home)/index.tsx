import React from 'react';
import { Text, View } from '@/components/Themed';
import CardMain from '@/components/home/card-main';
import ClubsList from '@/components/home/clubs-list';
import { styles } from './styles';
import { useRecentsClubs } from '@/hooks/useRecentsClubs';
import NoData from '@/components/no-data';
import ErrorMessage from '@/components/error-message';
import LoadingIndicator from '@/components/loading';

export default function Home() {

  const {resultRecentClubs, isError, isLoading} = useRecentsClubs();

  const firstClub = resultRecentClubs.results.length > 0 ? resultRecentClubs.results[0] : null;

  return (
    <View style={styles.container}>
      {isError ? (
        <ErrorMessage message="Falha ao carregar os clubes. Tente novamente!" />
      ) : isLoading ? (
        <LoadingIndicator />
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