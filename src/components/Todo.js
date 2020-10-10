import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

export const Todo = ({todos, onRemove}) => {
    return (
        <FlatList 
          style={styles.todos}
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
         <TouchableOpacity 
            activeOpacity={0.4} 
            onPress={() => {}}
            onLongPress={onRemove.bind(null, item.id)}
         >
          <Text
            style={styles.todo}>
            {item.title}
          </Text>
         </TouchableOpacity>)}>
        </FlatList>
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