import React, {useEffect, useState} from 'react';
import {Text, Alert, StyleSheet, Button} from 'react-native';

function WithoutUseRef() {
  const [count, setCount] = useState(10);

  const onPress = () => {
    setCount(count + 1);
    console.log(count, 'count value');
  };
  console.log('I rendered!');
  return (
    <>
      <Button onPress={onPress} title={'Click me'} />
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
});

export default WithoutUseRef;
