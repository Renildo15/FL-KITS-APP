import { View } from "react-native";
import CheckboxFederation from "../checkbox-federation";
import { useState } from "react";

export default function Filter() {
    const [fts, setFts] = useState(false)
    const [fl, setFl] = useState(false)
    const [all, setAll] = useState(true)

    return(
        <View style={{flexDirection:"row", justifyContent:"space-between", padding:10}}>
            <CheckboxFederation text='FTS' value={fts} setValue={setFts} />
            <CheckboxFederation text='FL' value={fl} setValue={setFl} />
            <CheckboxFederation text='Tudo' value={all} setValue={setAll} />
        </View>
    )
}