import React, {useEffect, useState} from 'react';
import {Text, Alert, StyleSheet, Button} from 'react-native';

function PropsExampleExistingComponent() {
  return (
    <>
      <Button title={'home'} />
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

export default PropsExampleExistingComponent;
