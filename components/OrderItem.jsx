import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React from 'react'
import Card from './Card'

const OrderItem = ({order, total}) => {
  return (
    <Card style={styles.cartItemContainer}>
        <View>
            <Text style={styles.createdAt}>
                Creada el {new Date(order.createdAt).toLocaleString()}
            </Text>
            <Text style={styles.total}>Total: ${total}</Text>
        </View>
        <TouchableOpacity style={styles.searchIcon} onPress={null}>
            <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
    </Card>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    cartItemContainer:{
        flexDirection:'row',
        alignItems:'center',
        padding:20,
    },
    createdAt:{
        marginBottom:5,
    },
    total:{
        fontSize:14,
    },
    searchIcon:{
        marginLeft:'auto',
    },
})