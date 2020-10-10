import React, {useState} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import {Navbar} from './src/components/Navbar';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  const handleChangetextfield = (title) => {
    setTodos(prevState => [...prevState, {id: Date.now().toString(), title}]);
  }

  const handleTodoLongPress = (id) => {
    const todo = todos.find(item => item.id);
    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить "${todo.title}"`,
      [
        {
          text: 'Отмена',
          style: 'cancel'
        },
        { text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            setTodoId(null);
            setTodos(prevState => prevState.filter(todo => todo.id !== id));
          } 
        }
      ],
      { cancelable: false }
    );
    
  }

  let content = <MainScreen 
    todos={todos}
    handleChangetextfield={handleChangetextfield}
    handleTodoLongPress={handleTodoLongPress}
    openTodo={setTodoId}/>;

  if (todoId) {
    const todo = todos.find(item => item.id === todoId);
    content = <TodoScreen goBack={() => setTodoId(null)} todo={todo} removeTodo={handleTodoLongPress}/>
  }

  return (
    <View>
      <Navbar/>
      <View style={styles.container}>
        {content}
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
