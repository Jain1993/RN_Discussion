import React, {useMemo, useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

function WithUseMemo() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(10);

  const squaredNum = useMemo(() => {
    return squareNum(number);
  }, [number]);
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
  // console.log('I rendered');
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

// const [squaredNum, setSquaredNum] = useState(1);
// useEffect(() => {
//   setSquaredNum(Math.pow(number, 2));
//   console.log(squaredNum);
// }, [number]);

export default WithUseMemo;
