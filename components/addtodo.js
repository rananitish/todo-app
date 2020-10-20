import React,{useState} from 'react';
import { StyleSheet,  View,TextInput,Button } from 'react-native';
 export default function AddTodos({submitHandler}){
     const [input,setInput]=useState('');
     const changeHandler=(val)=>{
         setInput(val);
     }
     
     return(
         <View>
         <TextInput
         style={styles.input}

         placeholder='new todo..'
         onChangeText={changeHandler}

         ></TextInput>

         <Button onPress={() => submitHandler(input)} title='add todos' color='coral'>
         </Button>
         </View>
     )
    
 }
 const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    },
})