import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

export default function App() {

  const [userNumber,setUserNumber] = useState(null)
  const [gameIsOver,setGameIsOver] = useState(true)
  const [guessRounds,setGuessRounds] = useState(0)


  function pickedNumberHandler(pickedNumber){
        setUserNumber(pickedNumber)
        setGameIsOver(false)
  }

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber){
    screen =<GameScreen gameOverHandler={gameOverHandler} userNumber={userNumber}/>
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen startNewGame={startNewGame} guessRounds={guessRounds} UserNumber={userNumber}/>
  }


  function startNewGame(){
    setGuessRounds(0)
    setUserNumber(null)
    screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  }

  return (<>
  <LinearGradient colors={["#5F0532FF","#CEB255FF"]} style={styles.container}>
    <ImageBackground 
    source={require("./assets/background.png")}
    resizeMode="cover"
     style={styles.container}
     imageStyle={styles.image}
    >
      <SafeAreaView style={styles.container}>
    {screen}
      </SafeAreaView>
    </ImageBackground>
  </LinearGradient>
  </>
  )
}

const styles = StyleSheet.create({
  container:{
   flex:1
  },

  image:{
    opacity:0.25
  }
});
