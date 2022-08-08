
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const WithUseLayoutEffect = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('UseEffect is called with the value of ', value);
    }, [value]);

    useLayoutEffect(() => {
        console.log('UseLayoutEffect is called with the value of ', value);
    }, [value]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {console.log('render()')}
            <Text>Count : {value}</Text>
            <Button title='Change Count Value' onPress={() => setValue(Math.random())} />
        </View>
    )
};

export default WithUseLayoutEffect;