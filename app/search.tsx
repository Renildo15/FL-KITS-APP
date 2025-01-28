import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import SearchInput from '@/components/search/search-input';
import Filter from '@/components/search/filter';

export default function Search() {

  return (
    <View style={styles.container}>
       <View style={{width:"100%", padding:10}}>
          <SearchInput/>
          <Filter/>
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
