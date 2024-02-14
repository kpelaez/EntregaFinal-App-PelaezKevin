import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {EvilIcons, Entypo} from '@expo/vector-icons'
import { TextInput } from 'react-native'
import { Pressable } from 'react-native'

const Search = ({onSearchHandlerEvent}) => {

  const [searchInput, setSearchInput] = useState('');
  const [error, setError] = useState("");

  const onSearchHandler = (search) =>{
    const regEx = /[^\w\s]/;
    if (regEx.test(searchInput)){
        setError("Solo se admiten letras y numeros");
        setSearchInput("");
    }
    else{
        setError("");
        onSearchHandlerEvent(search)
    }
  }

  const onResetSearchHandler = ()=>{
    setSearchInput("");
    setError("");
    onSearchHandlerEvent(searchInput);
  }


  return (
    <>
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                value={searchInput}
                onChangeText={setSearchInput}
                placeholder='Buscar producto'
            />
            <Pressable onPress={()=> onSearchHandler(searchInput)}>
                <EvilIcons name="search" size={24} color="gray"/>
            </Pressable>
            <Pressable onPress={()=> onResetSearchHandler("")}>
                <Entypo name="cross" size={24} color="gray"/>
            </Pressable>
        </View>
        { error 
            ? 
            <View style={styles.errorMessageContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
            :
            null
        }
    </>
  )
}

export default Search

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    },
    searchInput:{
        width:'80%',
    },
    errorMessageContainer:{
        backgroundColor: 'red'
    },
    errorText:{
        color:'#fff',
    },
})