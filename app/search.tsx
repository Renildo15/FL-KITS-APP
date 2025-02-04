import { StyleSheet } from 'react-native';

import { View, Text } from '@/components/Themed';
import SearchInput from '@/components/search/search-input';
import Filter from '@/components/search/filter';
import ClubsList from '@/components/home/clubs-list';
import { useState } from 'react';
import RadioButton from '@/components/radio-button';

export default function Search() {
  const [term, setTerm] = useState("")
  const [option, setOption] = useState("Tudo")
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", padding: 10, flex: 1, alignItems:"center" }}>
        <SearchInput 
          searchTerm={term}
          setSearchTerm={setTerm}
        />
        <RadioButton list={["FCM","FCH", "FCR","Tudo"]} option={option} setOption={setOption}/>
        <ClubsList searchTerm={term} option={option} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input_search: {
    width:"90%"
  },
  input_search_container: {
    width:"100%",
    flexDirection:"row", 
    alignItems:"center", 
    gap:10, 
    borderWidth:1,
    borderRadius: 5,
    padding: 5
  }
});
