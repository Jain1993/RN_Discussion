import React, {useEffect, useState} from 'react';
import {Text, View, Alert, StyleSheet, Button} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';

function WithUseEffect() {
  const navigation = useNavigation();
  const [msg, setMsg] = useState('Hello World');

  //with useEffect()
  useEffect(() => {
    console.log(`Hello World `);
    return () => {
      console.log(`Do some cleanup`);
    };
  }, []);

  // useEffect(() => {
  //   console.log('Hello world');
  // });

  // useEffect(() => {
  //   console.log('useeffect called as component did mount');
  // }, []);

  // useEffect(() => {
  //   console.log('useeffect called when count change');
  // }, [count]);

  // useEffect(() => {
  //   console.log('useeffect called when count change');
  // }, [count, count1]);

  return (
    <>
      <View style={styles.container}>
        <Text style={{marginBottom: 20}}>{`${msg}`}</Text>
        <Button
          onPress={() => setMsg('Good evening')}
          title={'Click Me to change the message'}
        />

        <Button
          onPress={() => navigation.replace({name: 'WithoutState'})}
          title={'Click here to change screen'}
        />
      </View>
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
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 40,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WithUseEffect;
