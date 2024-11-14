import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/Title";
import PrimaryButtton from "../components/PrimaryButtton";


export default function GameOverScreen({UserNumber,guessRounds,startNewGame}) {
    return (
        <View style={styles.container}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.img} source={require("../assets/success.png")} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed
                <Text style={styles.highlight}> {guessRounds} </Text>
                rounds to guess the number
                <Text style={styles.highlight}> {UserNumber} </Text>
            </Text>
            <PrimaryButtton onPress={startNewGame}>Start a New Game</PrimaryButtton>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 90
    },

    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: "#5F0532FF",
        overflow: "hidden",
        margin: 36
    },

    img: {
        width: "100%",
        height: "100%"
    },

    summaryText: {
        fontSize: 24,
        textAlign: "center",
        width: 310,
        marginBottom: 15
    },

    highlight: {
        color: "#4e0329",
        fontWeight: "bold"
    }

})