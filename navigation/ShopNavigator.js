import {createNativeStackNavigator} from "@react-navigation/native-stack"

// imports de Screens
import Categories from '../screens/Categories'
import ProductsByCategories from '../screens/ProductsByCategory'
import ProductDetail from "../screens/ProductDetail";

//import de componente header
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const ShopNavigator = () =>{
    return(

        <Stack.Navigator
            initialRouteName="Categorias"
            screenOptions={
                ({navigation, route})=>({
                    header: ()=> <Header title={route.name} navigation={navigation}/>
                })
            }
            >
            <Stack.Screen 
            name= "Categorias"
            component = {Categories}
            />

            <Stack.Screen 
                name= "Productos"
                component = {ProductsByCategories}
            />
            
            <Stack.Screen 
                name= "Detalle del producto"
                component = {ProductDetail}
            />
        </Stack.Navigator>


    )
}

export default ShopNavigator