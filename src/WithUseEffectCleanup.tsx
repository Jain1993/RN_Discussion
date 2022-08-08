import React, {useEffect, useState} from 'react';
import {Text, Alert, StyleSheet, Button} from 'react-native';

function WithUseEffectCleanup() {
  const [time, setTime] = useState(1000);

  useEffect(() => {
    //increments the counter value by 1 every 3 secends
    let timerId = setTimeout(() => {
      setTime(time - 1);
    }, 3000);
    // cleanup the timmer when component unmout
    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <Text style={styles.title}>{`Count Up ${time}  `}</Text>
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
});

export default WithUseEffectCleanup;
