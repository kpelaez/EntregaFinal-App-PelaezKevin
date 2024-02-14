import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CartItem from '../components/CartItem';
import { colors } from '../global/colors';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';

const Cart = () => {
  
  const cartItems = useSelector(state => state.cartReducer.items)
  const total = useSelector(state => state.cartReducer.value.total)

  const [triggerPost, result] = usePostOrderMutation() 

  const confirmCart = ()=> {
    triggerPost({total, cartItems, user: "LoggedUser"})
  }


  const renderCartItem = ({item})=>{
    <CartItem item={item}/>
  }

  return (
    <View style={styles.cartContainer}>
        <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        />
        <View style={styles.cartConfirm}>
            <Text style={styles.totalPrice}>Total: USD{total}</Text>
            <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
                <Text style={styles.textConfirm}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    cartContainer:{
        flex:1,
    },
    cartConfirm:{
        marginBottom:130,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:25,
    },
    totalPrice:{
        fontSize:16,
    },
    confirmButton:{
        backgroundColor: colors.secondary,
        padding:10,
        borderRadius:10,
    },
    textConfirm:{
        fontSize:16,
        color:'#fff',
    },
})