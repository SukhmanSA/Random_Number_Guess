import { Text, StyleSheet } from "react-native"

export default function Title({children}) {
  return (
    <Text style={style.title}>{children}</Text> 
  )
}

const style = StyleSheet.create({

    title:{
        fontSize:24,
        fontWeight:"bold",
        color:"#fff",
        textAlign:"center",
        borderWidth:2,
        borderColor:"#fff",
        padding:12,
        width:300
    }
})