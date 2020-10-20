import React from 'react';
import { StyleSheet, Text, TouchableOpacity,View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item,pressHandler2}){
    return(
        <TouchableOpacity onPress={()=>pressHandler2(item.key)}>
        <View style={styles.item}>
        <MaterialIcons name="delete-forever" size={18} color='#333' />
         <Text style={styles.Text}> {item.text} </Text>
        </View>
        </TouchableOpacity>
    )

}
const styles=StyleSheet.create({
    item:{
        display:"flex",
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderStyle:'dashed',
        borderWidth:2,
        borderRadius:10,
        flexDirection:'row'
    },
    Text:{
        marginLeft:10
    }
})