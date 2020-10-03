import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from './src/Navbar';
import {AddTodo} from './src/AddTodo';
import {Todo} from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);
  const handleChangetextfield = (title) => {
    setTodos(prevState => [...prevState, {id: Date.now().toString(), title}]);
  }

  return (
    <View>
      <Navbar/>
      <View style={styles.container}>
        <AddTodo onSubmit={handleChangetextfield}/>
        <Todo todos={todos}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
