import {  Text, View,  } from "react-native";

export default function Comp({ id, userId }) {
    return <View key={id}>
        <Text> id da mensagem : {id}</Text>
        <Text> id da pessoa : {userId}</Text>
        <View style={{ width: "100%", height: 1, backgroundColor: "gray" }}></View>
    </View>
}