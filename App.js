import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput,ScrollView,FlatList,TouchableOpacity, Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodos  from './components/addtodo'

export default function App() {
  const [name,hello]=useState('rana');
  //const [person,setPerson]=useState(90);
  const [people,setPeople]=useState([
    {name:'nitsh',id:'1'},
    {name:'rana',id:'2'},
    {name:'mario',id:'3'},
    {name:'luigi',id:'4'}
  ]);

  const[todos,setTodos]=useState([
    {text:'buy coffee ',key:'1'},
    {text:'create an app',key:'2'},
    {text:'play on the switch',key:'3'}
  ]);


  const clickHandler=()=>{
    hello('nitsh');
  };
  const submitHandler=(input)=>{

    if(input.length >3){
      setTodos((prevTodos)=> {
        return( [ 
          {text:input,key:Math.random().toString() },
          ...prevTodos  //spread operator it copies all the prvious todos
    
        ])});

    }
    else {
      Alert.alert("OOPS !","you have to submit the 3 characters",[
        {text:'understood'}
      ])
    }
   
  };
  const pressHandler=(id)=>{
    console.log(id);
    setPeople(
      (prevPeople)=>{
      return prevPeople.filter(perso=>perso.id!=id)
    }
    )
  };
  const pressHandler2=(key)=>{
    
    setTodos((prevTodos)=>{
      return prevTodos.filter(todos=>todos.key!=key)
    })
  };
  return (
    
   
  
    <View style={styles.container}>
    <Header />
    <AddTodos submitHandler={submitHandler}/>
    {/*<ScrollView>
  
    <View style={styles.header}>
   
    
    <Text style={styles.bold}>My name is : </Text>
    <TextInput 
    multiline
    style={styles.input}
    placeholder='eg.nitish'
    onChangeText={(val)=>hello(val)} //this will update the value of hello
    />
    
    <Text style={styles.bold}>his  age is : </Text>
    <TextInput 
    keyboardType='numeric'
   
    style={styles.input}
    placeholder='eg.30'
    onChangeText={(val)=>setPerson(val)} //this will update the value of hello
    />
    <Text>his name is {name} and age is : {person}</Text>
    </View>
 
   
    <View style={styles.butonContainer}>
    
     <Button title='updat state' onPress={clickHandler}></Button>
     
   
    </View>
  {/*  <View style={styles.containers}>
    {people.map((item)=>{
      return(
  
       <View key={item.key}>
        
       </View>
  
      )
    })}
  </View>



  
    
    <StatusBar style="auto" />
    </ScrollView>


    <FlatList 
    numColumns={2} //no f item in a column
    keyExtractor={(item)=>item.id}
    data={people}  //2nd method for rendering the list,it doesnt need scrollview
    renderItem={({item})=>(
      <TouchableOpacity onPress={() => pressHandler(item.id)}>  
      <Text style={styles.items}>{item.name}
      </Text>
      </TouchableOpacity>
      
    )}
    >
    </FlatList>*/}
    {/*header */}
    
    <View style={styles.content}>{/*to form*/}
    <View style={styles.list}>
    <FlatList
    data={todos}
    renderItem={({item})=>(
      /*<Text>{item.text}</Text>*/
      <TodoItem item={item} pressHandler2={pressHandler2}/>

    )}
    >
    
    </FlatList>

    </View></View>


    </View>
    
   


    
  );
}

const styles = StyleSheet.create(
  {
  container: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
   // justifyContent: 'center',
  },
   /*header:{
    backgroundColor:'pink',
    padding:20,
    marginTop:60
  },
  bold:{
    fontWeight:'bold',
  },
  body:{
    backgroundColor:'red',
    margin:30,
    padding:10,
  },
  butonContainer:{
    margin:30,
    
  },
  input:{
    borderWidth:1,
    borderColor: 'black',
    padding:9,
    margin:14,
    width:200,

  },
  containers:{
    //backgroundColor:'red',
    //flex:1,
    paddingHorizontal:20,
   
    paddingTop:40,

  },
  items:{
    marginTop:24,
    padding:30,
    backgroundColor:'orange',
    fontSize:24
  }*/
  content:{
    flex:1,
    padding:40,
  //  backgroundColor:'pink',
  },
  list:{
    flex:1,
    marginTop:40,
   // backgroundColor:'yellow'
  }


}
);
