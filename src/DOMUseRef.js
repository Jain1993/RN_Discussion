import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

function DOMUseRef() {
  const inputRef = React.useRef(null);

  const onPress = () => {
    inputRef?.current?.focus();
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={() => {}}
        value={String(1)}
        placeholder="Enter Number"
        keyboardType="numeric"
      />
      <Button onPress={onPress} title={'Focus Input Text'} />
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

export default DOMUseRef;
