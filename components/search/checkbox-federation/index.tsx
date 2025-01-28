import { Text, View } from "@/components/Themed";
import Checkbox from "expo-checkbox";

interface ICheckboxFederationProps {
    value: boolean;
    setValue:  React.Dispatch<React.SetStateAction<boolean>>;
    text: string;
  }

export default function CheckboxFederation(props: ICheckboxFederationProps) {
   return(
       <View style={{flexDirection:"row", gap:10}}>
         <Checkbox value={props.value} onValueChange={props.setValue} />
         <Text>{props.text}</Text>
       </View>
     )
}