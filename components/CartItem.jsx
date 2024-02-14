import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React from 'react'
import Card from './Card'
import { colors } from '../global/colors';

const CartItem = ({item}) => {
  return (
    <Card style={styles.cartItemContainer}>
        <Image
            style = {styles.imageCartItem}
            resizeMode='cover'
            source={{uri: item.images[0]}}
        />
        <View>
            <Text style={styles.cartTitle}>{item.title}</Text>
            <Text style={styles.cartBrand}>{item.brand}</Text>
            <Text style={styles.cartPrice}> $ {item.price} c/u</Text>
            <Text style={styles.cartTotalPrice}>Cantidad: {item.quantity}, Total: USD {item.price*item.quantity}</Text>
        </View>
        <TouchableOpacity style={styles.trashCart} onPress={null}>
            <Feather name="trash" size={24} color="black"></Feather>
        </TouchableOpacity>
    </Card>
    
  )
}

export default CartItem

const styles = StyleSheet.create({
    cartItemContainer:{
        flexDirection:'row',
        alignItems:'center',
        padding:20,
    },
    imageCartItem:{
        height:50,
        width:50,
        marginRight:10,
    },
    trashCart:{
        marginLeft:'auto',
    },
    cartTitle:{
        textTransform: 'capitalize',
        fontSize:20,
    },
    cartBrand:{
        textTransform: 'capitalize',
        fontSize:15,
    },
    cartPrice:{
        textTransform:'capitalize',
        fontSize:16,
        color:colors.primary,
    },
    cartTotalPrice:{
        textTransform:'capitalize',
        fontSize:20,
        color:colors.primary,
    },
})