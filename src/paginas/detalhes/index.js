import {View,Text,StyleSheet,Image,Button,TextInput} from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import firebase from '../../firebase/firebaseConnection'



export default function Detalhes(){
    const [nota,setNota] = useState();
    const navigation = useNavigation();

    const [nome,setNome] =useState('');
    const [idade,setIdade] = useState('');
    const [nota1,setNota1] = useState('');
    const [nota2,setNota2] = useState('');
    const [nota3,setNota3] = useState('');
    


   async function atualizarAluno(){

    await  firebase.database().ref('alunos').child(route.params.key).update({

        nome:nome,
        nota1:nota1,
        nota2:nota2,
        nota3:nota3,
        
    });
    navigation.navigate('Home');
    }


   async function deletarAluno(){
      await  firebase.database().ref(`alunos/${route.params.key}`).remove();
        navigation.navigate('Home');
    }
    
    const route = useRoute();

    useEffect(()=>{
        
        setNome(route.params.nome)
        setNota1(route.params.nota1)
        setNota2(route.params.nota2)
        setNota3(route.params.nota3)

        function calcularMedia(){
            const n1 = parseFloat(route.params.nota1);
            const n2 = parseFloat(route.params.nota2);
            const n3 = parseFloat(route.params.nota3);
            setNota((n1+n2+n3) /3)
        }
        calcularMedia();


    },[])
    return(


        <View style = {{alignItems:'center',flex:1}}>

            <Image style = {styles.imagems} source={route.params.imagem} />

            <View style = {styles.containerBotao}>
            <Text>Nome </Text> 
            <TextInput style = {styles.entrada}  value= {nome} onChangeText={(texto)=>setNome(texto)}></TextInput>
            </View>
            <View style = {styles.containerBotao}>
            <Text>Idade </Text> 
            <TextInput style = {styles.entrada}  value= {route.params.idade} ></TextInput>
            </View>
            <View style = {styles.containerBotao}>
            <Text>Nota 1 </Text>
            <TextInput style = {styles.entrada}  value= {nota1} onChangeText={(texto)=>setNota1(texto)}></TextInput>
            </View>
            <View style = {styles.containerBotao}>
            <Text>Nota 2 </Text>
            <TextInput style = {styles.entrada}  value= {nota2} onChangeText={(texto)=>setNota2(texto)}></TextInput>
            </View>
            <View style = {styles.containerBotao}>
            <Text>Nota 3 </Text>
            <TextInput style = {styles.entrada}  value= {nota3} onChangeText={(texto)=>setNota3(texto)}></TextInput>
            </View>
            {nota > 8 ? <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>Aprovado </Text> : <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>Reprovado</Text>}

            <View style = {styles.containerBotao}>
            <Button title='ATUALIZAR' color={'green'} onPress={atualizarAluno}></Button>

            <Button title='DELETAR' style ={styles.botao} color={'red'} onPress={deletarAluno}></Button>
            
            </View>
        
            
            
        </View>


    );
}

const styles = StyleSheet.create({

    imagems:{
      width:"90%",
      height:200,
      borderRadius:8,
      marginBottom:20
    },
    containerBotao:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-evenly',
        marginTop:20
      
       
    },
    entrada:{
      width:'70%',
      borderColor:'black',
      borderWidth:2,
      alignItems:'center',
      justifyContent:'center',
      marginTop:-2,
      paddingHorizontal:2,
      marginBottom:2

    }
  });