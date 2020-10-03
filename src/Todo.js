import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export const Todo = ({todos}) => {
    return (
        <View style={styles.todos}>
            {todos.map(todo => {
            return (
              <Text key={todo.id} style={styles.todo}>{todo.title}</Text>
            );
          })}
        </View>
    );
}

const styles = StyleSheet.create({
    todos: {
        marginTop: 15, 
    },
    todo: {
        paddingVertical: 13,
        paddingHorizontal: 10,
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 5,
    },

  });