import { View, Text, StyleSheet, Alert, FlatList, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Title from "../components/Title"
import { useEffect, useState } from "react";
import PrimaryButtton from "../components/PrimaryButtton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import GuessLogItem from "../components/GuessLogItem";


let minBoundary = 1;
let maxBoundary = 100;

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

export default function GameScreen({ userNumber, gameOverHandler, numberOfRounds }) {


    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds,setGuessRounds] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess === userNumber) {
           gameOverHandler(roundsLength)
        }
    }, [currentGuess, userNumber, gameOverHandler]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction) {

        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds=> [newRndNumber,...prevGuessRounds])
    }

    const roundsLength = guessRounds.length

    return (
        <View style={style.screen}>
            <Title>Computer's Guess</Title>
            <View style={style.guessContainer}>
                <Text style={style.guessText}>{currentGuess}</Text>
            </View>
            <Card>
                <InstructionText style={style.paddingText}>Higher or Lower?</InstructionText>
                <View style={style.btnContainer}>
                    <View style={style.btnContainers}>
                        <PrimaryButtton onPress={nextGuessHandler.bind(this, "greater")}>
                            <Ionicons name="add" size={24} color="#fff"></Ionicons>
                        </PrimaryButtton>
                    </View>
                    <View style={style.btnContainers}>
                        <PrimaryButtton onPress={nextGuessHandler.bind(this, "lower")}>
                            <Ionicons name="remove" size={24} color="#fff"></Ionicons>
                        </PrimaryButtton>
                    </View>
                </View>
            </Card>
            <View style={style.listContainer}>
            <FlatList 
            data={guessRounds} 
            renderItem={(itemData)=> <GuessLogItem guess={itemData.item} roundNumber={roundsLength-itemData.index}/>}
            keyExtractor={(item)=> item}
            />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 40,
    },

    guessContainer: {
        borderWidth: 2,
        borderColor: "#ddb52f",
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: "center",
        justifyContent: "center"
    },

    guessText: {
        color: "#ddb52f",
        fontSize: 30,
        fontWeight: "bold"
    },

    btnContainer: {
        flexDirection: "row"
    },

    btnContainers: {
        flex: 1
    },

    paddingText: {
        paddingBottom: 20
    },

    listContainer:{
        flex:1,
        padding:16
    }

})
