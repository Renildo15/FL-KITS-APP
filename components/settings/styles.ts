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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    borderBottomWidth:1, 
    flexDirection:"row", 
    padding:10, 
    alignItems:"center",  
    borderRadius:5, 
    borderColor:"gray",
    gap:10,
    backgroundColor:"#f0f0f0",
    height:100
  }
});
