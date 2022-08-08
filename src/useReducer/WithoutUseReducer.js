import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const WithoutUseReducer = () => {
    const [count, setCount] = useState(0);
    const [frozen, setFrozen] = useState(false);

    const increment = () => {
        setCount((prevCount) => {
            if (frozen) {
                return prevCount;
            }
            return prevCount + 1;
        });
    };

    const increaseCount = () => {
        increment();
        setFrozen(true);
        increment();
    }
    console.log(count, frozen);
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }} > {count} </Text>
            <Button title="Increase Count" onPress={() => increaseCount()} />
        </View>
    );
}
export default WithoutUseReducer;
