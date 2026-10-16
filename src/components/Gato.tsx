import { Text, View } from "react-native";

const Gato = () => {
    const nome = () => {
        return 'da Palma'
    }

    return (
        <View>
            <Text> Gato {nome()} </Text>
        </View>
    );
}

export default Gato;