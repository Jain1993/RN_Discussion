import React, {useEffect, useState} from 'react';
import {Text, View, Alert, StyleSheet, Button} from 'react-native';

function WithStateFunctional() {
  const [count, setCount] = useState(10);

  const onPress = () => {
    setCount(count + 1);
    console.log(count, 'count value');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Value of count is ${count}`}</Text>
      <Button onPress={onPress} title={'Increase Counter'} />
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WithStateFunctional;
