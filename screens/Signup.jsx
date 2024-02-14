import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Input from '../components/Input'
import { colors } from '../global/colors'
import { useState } from 'react'
import { useSignUpMutation } from '../services/authService'
import { useEffect } from 'react'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'


const Signup = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [triggerSignUp, result] = useSignUpMutation()

  const onSubmit = () =>{
    triggerSignUp({email, password})
  }

  const dispatch = useDispatch()

  useEffect(()=>{
    if(result.data){
        dispatch(setUser(result.data))
    }
  }, [result])

  return (
    <View style={styles.container}>
        <Input
            label="Email:"
            onChange={setEmail}
            error=""
        />
        <Input
            label="Password:"
            onChange={setPassword}
            error=""
            isSecure={true}
        />
        <Input
            label="Repetir password:"
            onChange={setConfirmPassword}
            error=""
            isSecure={true}
        />
        <TouchableOpacity style={styles.btn} onPress={onSubmit}>
            <Text style={styles.btnText}>Registrarse</Text>
        </TouchableOpacity>
        <View style={styles.altContainer}>
            <Text stryle={styles.subtitle}>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                <Text style={styles.subtitleLink}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        gap:10,
    },
    btn:{
        padding:10,
        backgroundColor:colors.primaryBack,
        borderRadius:8,
        margin:5,
    },
    btnText:{
        color:"#fff",
    },
    altContainer:{
        flexDirection:'row',
        gap:5,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
    },
    subtitle:{
        color:"#fff",
        fontSize:12,
    },
    subtitleLink:{
        color:"#fff",
        fontSize:11,
        textDecorationLine:"underline",
    }
})