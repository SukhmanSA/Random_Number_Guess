import { View,StyleSheet } from "react-native";


export default function Card({children}) {
  return (
    <View style={style.inputContainer}>{children}</View>
  )
}


const style = StyleSheet.create({
    
  inputContainer: {
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 9,
    alignItems: "center",
    justifyContent: "center"
  }

})