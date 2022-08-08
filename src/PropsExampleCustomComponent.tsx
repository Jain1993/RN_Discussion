import React, {useEffect, useState} from 'react';
import {Text, Alert, StyleSheet} from 'react-native';

interface Props {
  message: string;
  status?: string;
}

function PropsExampleCustomComponent({message, status}: Props) {
  return (
    <>
      <Text
        style={
          styles.title
        }>{`Child Component ${message} and status is ${status} `}</Text>
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

export default PropsExampleCustomComponent;
