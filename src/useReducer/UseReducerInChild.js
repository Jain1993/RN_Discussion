import React, { useReducer, useState } from "react";
import { Button, Text, View } from "react-native";
import { countReducer, INCREMENT, SET_FROZEN } from "./WithUseReducer";

const UseReducerInChild = () => {
    const [state, dispatch] = useReducer(countReducer);

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
            <Text style={{ fontSize: 18, fontWeight: 'bold' }} > {'Child : ' + state?.count} </Text>
            {/* <Button title="Increase Count" onPress={() => { increaseCount() }} /> */}
        </View>
    );
}
export default UseReducerInChild;
