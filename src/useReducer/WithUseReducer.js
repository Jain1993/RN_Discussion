import { useNavigation } from "@react-navigation/native";
import React, { useReducer, useState } from "react";
import { Button, Text, View } from "react-native";

// Action Types
export const INCREMENT = 'INCREMENT'
export const SET_FROZEN = 'SET_FROZEN'

export const countReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            if (state.frozen) {
                return state;
            }
            return {
                ...state,
                count: state.count + 1
            };
        case SET_FROZEN:
            return {
                ...state,
                frozen: action.frozen
            };
        default:
            return state;
    }
};

const WithUseReducer = () => {
    const navigation = useNavigation()
    const [state, dispatch] = useReducer(countReducer, {
        count: 0,
        frozen: false
    });

    const increaseCount = () => {
        dispatch({ type: INCREMENT });
        dispatch({
            type: SET_FROZEN,
            frozen: true
        });
        dispatch({ type: INCREMENT });
    }
    {console.log(state)}
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }} > {state.count} </Text>
            <Button title="Increase Count" onPress={() => increaseCount()} />

            <View style={{ marginTop : 10 }} >
            <Button title="Go to child" onPress={() => navigation.navigate('UseReducerInChild')} />
            </View>
        </View>
    );
}
export default WithUseReducer;
