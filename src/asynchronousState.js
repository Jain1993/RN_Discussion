import React, {useEffect, useState} from 'react';
import {Text, Button, Alert, StyleSheet} from 'react-native';

function AsynchronousState() {
  const [flag, setFlag] = useState(10);

  useEffect(() => {
    setFlag(20);

    // Alert.alert(' Value of flag in use Effect is ' + flag);
    console.log(' value of flag in use Effect is ', flag);
  }, []);

  useEffect(() => {
    console.log('latest flag value is ', flag);
  }, [flag]);

  return (
    <>
      <Text style={styles.title}>{`Value of flags is ${flag}  `}</Text>
      <Button
        onPress={() => {
          setFlag(flag + 1);
          console.log(flag, 'flag');
        }}
        title={'click me'}
      />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default AsynchronousState;
