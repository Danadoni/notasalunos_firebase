import React, { useState } from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import firebase from '../../firebase/firebaseConnection'

export default function Cadastrar(){
    const [nome,setNome] = useState('');
    const [idade,setIdade] = useState('');
    const [nota1,setNota1] = useState('');
    const [nota2,setNota2] = useState('');
    const [nota3,setNota3] = useState('');
    const [imagem,setImagem] = useState('');

    async function cadastraAluno(){

         let aluno = await firebase.database().ref('alunos');
         let chave = aluno.push().key;

         aluno.child(chave).set({
            nome:nome,
            idade:idade,
            nota1:nota1,
            nota2:nota2,
            nota3:nota3,
            imagem:imagem
         });

          setNome("")
          setIdade("")
          setImagem("")
          setNota1("")
          setNota2("")
          setNota3("")

    }

    return(

        <View style ={estilos.container}>
            <Text style={{fontSize:30, fontWeight:'bold'}}>Cadastro de Alunos </Text>
            <Text style ={estilos.texto}>Nome :</Text>
            <TextInput value = {nome} style ={estilos.entradas} placeholder='Digite o nome do aluno'
             onChangeText={(texto) => setNome(texto)} ></TextInput>
            <Text style ={estilos.texto}>Idade :</Text>
            <TextInput  value = {idade} style ={estilos.entradas} placeholder='Digite a idade do aluno' onChangeText={(texto)=>setIdade(texto)}></TextInput>
            <Text style ={estilos.texto}>Nota1 :</Text>
            <TextInput value = {nota1} style ={estilos.entradas} placeholder='Digite a Nota 1 do aluno'onChangeText={(texto)=>setNota1(texto)} ></TextInput>
            <Text style ={estilos.texto}>Nota2 :</Text>
            <TextInput value = {nota2} style ={estilos.entradas} placeholder='Digite a Nota 2 do aluno' onChangeText={(texto)=>setNota2(texto)}></TextInput>
            <Text style ={estilos.texto}>Nota3 :</Text>
            <TextInput value = {nota3 } style ={estilos.entradas} placeholder='Digite a Nota 3 do aluno' onChangeText={(texto)=>setNota3(texto)}></TextInput>
            <Text style ={estilos.texto}>Imagem :</Text>
            <TextInput value = {imagem} style ={estilos.entradas} placeholder='Digite o link com a foto do aluno' onChangeText={(texto)=>setImagem(texto)}></TextInput>


        <TouchableOpacity style ={estilos.botao} onPress= {cadastraAluno}>
            <Text style={{fontWeight:'bold  '}}>Cadastrar</Text></TouchableOpacity>
        </View>

    );
}

const estilos = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center'

    },
    entradas :{
        width:'85%',
        height:30,
        borderWidth:2
    },
    botao:{
        width:'85%',
        height:60,
        alignItems:'center',
        backgroundColor:'orange',
        marginTop:20,
        justifyContent:'center',
        fontWeight:'bold'
    },
    texto:{
        marginTop:20,
        marginLeft:-252,
        fontSize:15,
        fontWeight:'bold'


    }


})