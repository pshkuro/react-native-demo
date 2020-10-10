import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AddTodo} from '../components/AddTodo';
import {Todo} from '../components/Todo';

export const MainScreen = ({todos, handleChangetextfield, handleTodoLongPress, openTodo }) => {
    return (
       <View>
        <AddTodo onSubmit={handleChangetextfield}/>
        <Todo todos={todos} onRemove={handleTodoLongPress} onOpen={openTodo}/>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {},
  });