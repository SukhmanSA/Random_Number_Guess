import { Text, View, Pressable,StyleSheet } from "react-native"

function PrimaryButtton({children,onPress}) {
  
  return (
    <View style={styles.buttonContainer}>
    <Pressable style={styles.button} onPress={onPress} android_ripple={{color:"#AD0659FF"}}>
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({

  buttonContainer:{
    borderRadius:28,
    margin:4,
    overflow:"hidden"
  },

  button:{
    backgroundColor:"#72063c",
    borderRadius:28,
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2
  },

  buttonText:{
    color:"#fff",
    textAlign:"center"
  }
})

export default PrimaryButtton