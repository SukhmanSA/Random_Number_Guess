import { Text, StyleSheet } from "react-native"


export default function InstructionText({children,style}) {
  return (
    <Text style={[styles.inputHeading,style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    
    inputHeading:{
        color:"#ddb52f",
        fontSize:24,
        fontWeight:"400"
       }
  
  })