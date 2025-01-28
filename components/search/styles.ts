import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
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
