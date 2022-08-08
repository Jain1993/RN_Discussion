import React, { createContext, useContext } from 'react'
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export const TextContext = createContext()

const Root = () => {
    const [text, setText] = useState("React Native Context");
    return (
        <TextContext.Provider value={text}>
            <Component1 />
        </TextContext.Provider>
    );
}

const Component1 = () => {
    return (
        <View>
            <Text style={styles.text}>Component 1</Text>
            <Component2 />
        </View>
    );
}

const Component2 = () => {
    return (
        <View>
            <Text style={styles.text}>Component 2</Text>
            <Component3 />
        </View>
    );
}

const Component3 = () => {
    const text = useContext(TextContext)
    return (
        <View>
            <Text style={styles.text}>Component 3</Text>
            <Text style={styles.text}>{`Hello ${text} again!`}</Text>
        </View>
    );
}

const Component4 = () => {
    const text = useContext(TextContext)
    return (
        <View>
            <Text style={styles.text}>Component 4</Text>
            <Text style={styles.text}>{`Hello ${text} again!`}</Text>
        </View>
    );
}

export default WithUseContext = () => {
    return (
        <View>
            <Root />
            {/* Out side component tree */}
            {/* <Component4 /> */}
        </View>
    )
}

export const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: 'bold'
    }
})