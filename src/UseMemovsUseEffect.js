import React, {useMemo, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

function UseMemovsUseEffect() {
  const [number, setNumber] = useState(0);
  const result = useCalculate(number);
  const resultWithMemo = useCalculateWithMemo(number);

  function squareNum(number) {
    console.log(`Squaring function is called! ${number}`);
    return Math.pow(number, 2);
  }

  const onChangeNumber = data => {
    setNumber(data);
  };

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <>
      <View></View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default UseMemovsUseEffect;
