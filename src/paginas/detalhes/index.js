import {View,Text} from 'react-native'
import React,{useState} from 'react'
import { useRoute } from '@react-navigation/native';



export default function Detalhes(){
    const [nota,setNota] = useState();
    
    const route = useRoute();
    return(


        <View>
            <Text>{route.params.nome}</Text>
            <Text>{route.params.nota1}</Text>
            <Text>{route.params.nota2}</Text>
            <Text>{route.params.nota3}</Text>
            
        </View>


    );
}