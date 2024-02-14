import { StyleSheet, Text, View } from 'react-native'
import { useLoginMutation } from '../services/authService'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [triggerLogin, result] = useLoginMutation()

  const onSubmit = () =>{
    triggerLogin({email, password})
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
        <TouchableOpacity style={styles.btn} onPress={onSubmit}>
            <Text style={styles.btnText}>Ingresar</Text>
        </TouchableOpacity>
        <View style={styles.altContainer}>
            <Text stryle={styles.subtitle}>¿No tienes una cuenta?</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}>
                <Text style={styles.subtitleLink}>Crear una cuenta</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login

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