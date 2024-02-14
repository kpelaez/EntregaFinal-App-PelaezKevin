import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import Signup from "../screens/Signup";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator    
        initialRouteName="Login"
        screenOptions={
            (({navigation, route}) =>({
                    header: ()=><Header title={route.name} navigation={navigation}/>
            }))
        }
    >
        <Stack.Screen
            name="SignUp"
            component={Signup}
        />

        <Stack.Screen
            name="Login"
            component={Login}
        />
    </Stack.Navigator>    
  )
}

export default AuthNavigator