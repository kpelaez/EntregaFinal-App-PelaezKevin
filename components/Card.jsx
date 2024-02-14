import { StyleSheet, Text, View } from 'react-native'
import React, { children } from 'react'

const Card = (style) => {
  return (
    <View style={{...styles.container,...style}}>
      {children}
    </View>
  )
}

export default Card 

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ECECEC',
        shadowColor:'#000',
        shadowOffset:{
            heigth:5,
            width:3,
        },
        elevation:5,
        shadowOpacity:1,
        shadowRadius:1,
    }
})