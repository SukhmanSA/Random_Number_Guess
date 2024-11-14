import { StyleSheet, Text, View } from "react-native";


export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
        <Text>#{roundNumber}</Text>
        <Text>Computer's Guess: {guess} </Text>
    </View>
  )
}

const styles = StyleSheet.create({

    listItem:{
         borderColor:"#3b021f",
         borderWidth:1,
         borderRadius:40,
         padding:12,
         marginVertical:8,
         backgroundColor: "#ddb52f",
         flexDirection:"row",
         justifyContent:"space-between",
         width:"100%",
         elevation:4
    }

})
