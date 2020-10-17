import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import {TypographyDefault} from '../ui/TypographyDefault';
import { THEME } from '../theme';

export const Todo = ({todos, onRemove, onOpen}) => {
    return (
        <FlatList 
          style={styles.todos}
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
         <TouchableOpacity 
            activeOpacity={0.4} 
            onPress={onOpen.bind(null, item.id)}
            onLongPress={onRemove.bind(null, item.id)}
         >
          <TypographyDefault
            style={styles.todo}>
            {item.title}
          </TypographyDefault>
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
        borderColor: THEME.pallete.main,
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 5,
    },

  });