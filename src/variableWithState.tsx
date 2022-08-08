import React, {useState} from 'react';
import {Text, Alert, View, StyleSheet, Button} from 'react-native';

let countVar = 10;
function VariableWithState() {
  const [count, setCount] = useState(10);

  const onPress = () => {
    countVar++;
    setCount(count + 1);
    console.log('countVar', countVar, 'count', count);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Value of count state is ${count}`}</Text>
      <Text style={styles.title}>{`Value of countVar is ${countVar}`}</Text>
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

export default VariableWithState;
