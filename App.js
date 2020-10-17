import React, {useState} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import {Navbar} from './src/components/Navbar';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  // Пока все асинхронные вещи не загрузятся дальше приложение не отрисуется
  if (!isReady) {
    return <AppLoading
      // Функция, которая выполняет в фоне различную загрузку
      startAsync={loadApplication}
      onFinish={() => setIsReady(true)}
      onError={err => console.log(err)}
    />
  }

  const handleChangetextfield = (title) => {
    setTodos(prevState => [...prevState, {id: Date.now().toString(), title}]);
  }

  const updateTodo = (id, title) => {
    setTodos(prevState => prevState.map(todo => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    }))
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
    content = <TodoScreen goBack={() => setTodoId(null)} todo={todo} removeTodo={handleTodoLongPress} onSave={updateTodo}/>
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
