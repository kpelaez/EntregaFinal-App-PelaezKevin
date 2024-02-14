import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {colors} from '../global/colors'
import { ScrollView } from 'react-native-web';
import { addItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const ProductDetail = ({route, navigation}) => {
  
  const [productSelected, setProductSelected] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  const {productId} = route.params


  useEffect(()=>{
    const productFinded = products_data.find(product => product.id === productId)
    setProductSelected(productFinded)
    setIsLoading(false)
  }, [productId])

  const dispatch = useDispatch()

  const onAddToCart = () =>{
    dispatch(addItem({...productSelected, quantity: 1}))
  }

  return (
    <>
      {
        isLoading
          ?
          <ActivityIndicator/>
          :
          <View>
            <ScrollView>
              <Image 
                source={{uri: productSelected.images[0]}}
                resizeMode='cover'
                style={styles.imageProduct}
              />
              <View style={styles.detailContainer}>
                <Text style={styles.title}>{productSelected.title}</Text>
                <Text style={styles.description}>{productSelected.description}</Text>
                <Text style={styles.price}>$ {productSelected.price}</Text>
                <TouchableOpacity style={styles.buyButton} onPress={onAddToCart}>
                  <Text style={styles.buyText}>Agregar a Carrito!</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
      }
    </>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  imageProduct:{
    minWidth: 300,
    width:'100%',
    height:400,
  },
  detailContainer:{
    alignItems:'center',
  },
  title:{
    fontSize:32,
  },
  description:{
    fontSize:20,
  },
  price:{
    fontSize:32,
    color: colors.secondary,
  },
  buyButton:{
    marginTop:10,
    width:200,
    padding:10,
    alignItems:'center',
    backgroundColor:colors.ligthGray,
    borderRadius:10,
  },
  buyText:{
    color:'#fff',
  },
})