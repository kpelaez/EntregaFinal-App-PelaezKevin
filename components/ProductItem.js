import { Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setProductIdSelected } from '../features/shop/shopSlice'


const ProductItem = ({item, navigation}) => {
  
  const {height, width} = useWindowDimensions();


  const dispatch = useDispatch()
  return (
    <Card>
        <Pressable onPress={()=>{
            dispatch(setProductIdSelected(item.id))
            navigation.navigate("Detalle del producto", item.id)}} 
            style={styles.containerProductItem}>
                
            <Text style={
                width < 350
                    ?
                    styles.titleProductItemMin
                    :
                    styles.titleProductItem}>
                {item.title}
            </Text>
            <Image
                style={styles.imageProductItem}
                resizeMode='cover'
                source={{uri:item.images[0]}}
            />
        </Pressable>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginVertical:20
    },
    titleProductItemMin:{
        paddingVertical: 20,
        width: '65%',
        fontSize:12,
    },
    titleProductItem:{
        paddingVertical:20,
        width:'70%',
    },
    imageProductItem:{
        minWidth:60,
        width:'30%',
    }
})