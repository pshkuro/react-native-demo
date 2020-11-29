import React, {useContext} from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import { THEME } from './theme';
import {Navbar} from './components/Navbar';
import {MainScreen} from './screens/MainScreen';
import {TodoScreen} from './screens/TodoScreen';
import { ScreenContext } from './context/screen/screenContext';


export const MainLayout = () => {
    // Получили контекст который ранее создали
    const {todoId} = useContext(ScreenContext);
         
    //   const handleTodoLongPress = (id) => {
    //     const todo = todos.find(item => item.id);
    //     Alert.alert(
    //       'Удаление элемента',
    //       `Вы уверены, что хотите удалить "${todo.title}"`,
    //       [
    //         {
    //           text: 'Отмена',
    //           style: 'cancel'
    //         },
    //         { text: 'Удалить', 
    //           style: 'destructive',
    //           onPress: () => {
    //             setTodoId(null);
    //             setTodos(prevState => prevState.filter(todo => todo.id !== id));
    //           } 
    //         }
    //       ],
    //       { cancelable: false }
    //     );
        
    //   }


    return (
    <View>
        <Navbar/>
        <View style={styles.container}>
            {todoId ? <TodoScreen /> : <MainScreen />}
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingVertical: THEME.padding.default,
      paddingHorizontal: THEME.padding.horizontal,
    },
 });