import React, {useRef, useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

function PersistValueUseRef() {
  // const [count, setCount] = useState(0);

  // const handle = () => {
  //   const updatedCount = count + 1;
  //   console.log(`Clicked ${updatedCount} times`);
  //   setCount(updatedCount);
  // };

  const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log('render method calledd!');

  return (
    <View style={styles.container}>
      <Button onPress={handle} title={'Click Me'} />
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

export default PersistValueUseRef;
