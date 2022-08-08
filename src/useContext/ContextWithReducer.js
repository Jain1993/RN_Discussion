import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context, DECREMENT, INCREMENT, Provider } from './CreateDataContext';

const Child = () => {
    const {state, dispatch} = useContext(Context)
    const increaseCount = () => {
        dispatch({ type: INCREMENT });
    }
    const decreaseCount = () => {
        dispatch({ type: DECREMENT });
    }
    console.log(state)
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }} > {state.count} </Text>
            <Button title="Increase Count" onPress={() => increaseCount()} />
            <Button title="Decrease Count" onPress={() => decreaseCount()} />
        </View>
    );
}

const ContextWithReducer = () => {
    return (
        <Provider>
            <Child />
        </Provider>
    )
}

export default ContextWithReducer

const styles = StyleSheet.create({})