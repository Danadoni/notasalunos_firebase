import React,{useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebase/firebaseConnection'

export default function Home() {
    const navigation = useNavigation();
  const [alunos,setAlunos] = useState([]);

  function irDetalhes(name,n1,n2,n3,img,key){
    navigation.navigate("Detalhes",{nome:name,nota1:n1,nota2:n2,nota3:n3,imagem:img,key:key})
  }

  useEffect(()=>{


    async function buscarAlunos(){


     await firebase.database().ref('alunos').on('value',(snapshot) =>{

      setAlunos([]);

      snapshot.forEach((childItem) => {
        let data = {
          key:childItem.key,
          nome:childItem.val().nome,
          idade: childItem.val().idade,
          nota1: childItem.val().nota1,
          nota2: childItem.val().nota2,
          nota3: childItem.val().nota3,
          imagem: childItem.val().imagem

        };
        //adicionando cada item para dentro do array
        setAlunos(oldArray => [...oldArray,data]);
      })
     })

    }


    buscarAlunos();

  },[])

  return (

    <View style = {styles.container}>
      <Text style={{fontSize:30,fontWeight:'bold'}}> LISTA DE ALUNOS  </Text>


<FlatList
           
            showsHorizontalScrollIndicator={false}
            data={alunos}
            numColumns={2}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TouchableOpacity style ={styles.containerAlunos} onPress ={()=>irDetalhes(
                item.nome,
                item.nota1,
                item.nota2,
                item.nota3,
                item.imagem,
                item.key
                )}>
                

                <Image style = {styles.imagems} source={{uri:item.imagem}} />
              <Text>Nome: {item.nome}  </Text>
              <Text>Idade: {item.idade}  </Text>
            
              </TouchableOpacity>
            )}
            >


    </FlatList>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F0F8FF'
  },
  imagems:{
    width:"70%",
    height:90,
    borderRadius:8
  },
  containerAlunos: {
    height:160,
    width:180,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    marginLeft:5,
    borderWidth:2,
    borderRadius:8
  },
});
