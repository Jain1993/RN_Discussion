import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

function WithoutUseMemo() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(10);

  const squaredNum = squareNum(number);

  function squareNum(number) {
    console.log(`Squaring function is called with ${number}`);
    return Math.pow(number, 2);
  }

  const onChangeNumber = data => {
    setNumber(data);
  };

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={String(number)}
          placeholder="Enter Number"
          keyboardType="numeric"
        />
        <Text style={styles.title}>Square of given number is {squaredNum}</Text>
        <Text>
          --------------------------------------------------------------------
        </Text>
        <Text
          style={[
            styles.title,
            {marginTop: 30},
          ]}>{`Value of count is ${count}`}</Text>
        <Button onPress={onPress} title={'Increase Counter'} />
      </View>
    </View>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WithoutUseMemo;
