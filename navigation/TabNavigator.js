// Importacion base 
import { StyleSheet, View } from "react-native";

//Importacion de funciones para el TabNavigator
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//Importacion de Screen Navigators
import ShopNavigator from "./ShopNavigator"
import CartNavigator from "./CartNavigator"
import OrdersNavigator from "./OrdersNavigator"

//Importacion para diseño visual
import { colors } from "../global/colors";
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';



//instanciamos el objeto
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}>
                <Tab.Screen
                    name="ShopStack"
                    component={ShopNavigator}
                    options={{
                        tabBarIcon:({focused}) =>{
                            return(
                                <View>
                                    <Entypo name="shop"
                                        size={24}
                                        color={focused?"#fff":"black"}
                                    />
                                </View>
                            );
                        }
                    }}>
                </Tab.Screen>

                <Tab.Screen
                    name="CartStack"
                    component={CartNavigator}
                    options={{
                        tabBarIcon:({focused}) =>{
                            return(
                                <View>
                                    <AntDesign name="shoppingcart"
                                        size={24}
                                        color={focused?"#fff":"black"}
                                    />
                                </View>
                            );
                        }
                    }}>
                </Tab.Screen>
                <Tab.Screen
                    name='OrdersStack'
                    component={OrdersNavigator}
                    options={{
                        tabBarIcon:({focused})=>{
                            return(
                                <View>
                                    <FontAwesome name="list-ul" size={24} color={focused?"fff":"black"} />
                                </View>
                            );
                        }
                    }}>
                </Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.primary,
        shadowColor: "#ccc",
        elevation:1,
        position:"absolute",
        bottom:25,
        left,
        right:20,
        borderRadius:20,
        height:90,
    }
})