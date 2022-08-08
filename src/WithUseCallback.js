import React, {useState, useCallback} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import Todos from './Todos';

function WithUseCallback() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(c => c + 1);
  };
  // const addTodo = () => {
  //   setTodos(t => [...t, 'New Todo']);
  // };

  const addTodo = useCallback(() => {
    setTodos(t => [...t, 'New Todo']);
  }, [todos]);

  return (
    <View style={styles.container}>
      <Todos todos={todos} addTodo={addTodo} />
      <Text>-----------------------------------------------------</Text>
      <Text>Count: {count}</Text>
      <Button onPress={increment} title={'Increment Counter'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WithUseCallback;
