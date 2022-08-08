import React from 'react'
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Component1 = () => {
    const [text, setText] = useState("React Native Context");

    return (
        <View>
            <Text style={styles.text}>{`Hello ${text}!`}</Text>
            <Component2 text={text} />
        </View>
    );
}

const Component2 = ({ text }) => {
    return (
        <View>
            <Text style={styles.text}>Component 2</Text>
            <Component3 text={text} />
        </View>
    );
}

const Component3 = ({ text }) => {
    return (
        <View>
            <Text style={styles.text}>Component 3</Text>
            <Text style={styles.text}>{`Hello ${text} again!`}</Text>
        </View>
    );
}

const WithoutUseContext = Component1

export default WithoutUseContext

export const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: 'bold'
    }
})