import React, {memo} from 'react';
import {Button, Text} from 'react-native';

const Todos = ({todos, addTodo}) => {
  console.log('child render');
  return (
    <>
      <Text>My Todos</Text>
      {todos.map((todo, index) => {
        return <Text key={index}>{todo}</Text>;
      })}
      <Button onPress={addTodo} title={'Add Todo'} />
    </>
  );
};

export default memo(Todos);
