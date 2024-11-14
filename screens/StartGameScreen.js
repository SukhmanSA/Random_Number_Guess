import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import PrimaryButtton from "../components/PrimaryButtton";
import { useState } from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";


function StartGameScreen({onPickNumber}) {

    const [enteredNumber,setEnteredNumber] = useState("")

    function handleNumberAdd(enteredText){
        setEnteredNumber(enteredText)
    }

    function handleReset(){
      setEnteredNumber("")
    }

    function handleConfirmation(){
      const chosenNumber = parseInt(enteredNumber)

      if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){

        Alert.alert(
          "Invalid Input!",
          "You have to enter an number between 0 and 100.",
          [{text:"okay",style:"destructive", onPress: handleReset}]
        )
        return 
      }

      onPickNumber(chosenNumber)
    }

  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>
    <Card>
      <InstructionText>Enter a Number</InstructionText>
      <TextInput 
      style={styles.numberInput} 
      maxLength={2} 
      keyboardType="number-pad" 
      value={enteredNumber}
      onChangeText={handleNumberAdd}
      />
      <View style={styles.buttonsContainers}>
        <View style={styles.buttonsContainer}>
          <PrimaryButtton onPress={handleReset}>Reset</PrimaryButtton>
        </View>
        <View style={styles.buttonsContainer}>
          <PrimaryButtton onPress={handleConfirmation}>Confirm</PrimaryButtton>
        </View>
      </View>
    </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  
  container:{
    flex:1,
    marginTop:90,
    alignItems:"center"
   },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center"
  },

  buttonsContainers: {
    flexDirection: "row"
  },

  buttonsContainer: {
    flex: 1
  }

})

export default StartGameScreen

