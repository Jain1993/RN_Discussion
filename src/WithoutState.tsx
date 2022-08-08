import React, {useEffect} from 'react';
import {Text, Alert, StyleSheet, Button, View} from 'react-native';

function WithoutState() {
  let count = 10;

  const onPress = () => {
    count++;
    console.log(count, 'count value');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Value of counter is ${count}`}</Text>
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

export default WithoutState;
