import React, { createContext, useContext, useMemo, useState } from 'react'
import { Button, Text } from "react-native";
import { Context, DECREMENT, INCREMENT, Provider } from './CreateDataContext';

const SayHello = () => {
    const { state } = useContext(Context);
    console.log("SayHello is running");
    return <Text style={{ alignSelf : 'center' }} >{'Hello'}</Text>;
};

const IncrementCounter = () => {
    const { state, dispatch } = useContext(Context);
    const increaseCount = () => {
        dispatch({ type: INCREMENT });
    }
    console.log("IncrementCounter is running");
    return <Button onPress={increaseCount} title={'Increment'} />;
};

const DecrementCounter = () => {
    const { state, dispatch } = useContext(Context);
    console.log("DecrementCounter is running");
    const decreaseCount = () => {
        dispatch({ type: DECREMENT });
    }
    return <Button onPress={decreaseCount} title='Decrement' />;
};

const ShowResult = () => {
    console.log("ShowResult is running");
    const { state } = useContext(Context);
    return <Text style={{ alignSelf : 'center' }} >{state?.count}</Text>;
};

export default RerenderingProblem = () => (
    <Provider>
        <SayHello />
        <ShowResult />
        <IncrementCounter />
        <DecrementCounter />
    </Provider>
);