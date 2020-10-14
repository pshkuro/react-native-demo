import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {AddTodo} from '../components/AddTodo';
import {Todo} from '../components/Todo';

export const MainScreen = ({todos, handleChangetextfield, handleTodoLongPress, openTodo }) => {
    let content = (
        <Todo todos={todos} onRemove={handleTodoLongPress} onOpen={openTodo}/>
    );

    if (todos.length === 0) {
        content = <View style={styles.image_wrap}>
            <Image 
                style={styles.image} 
                source={require('../../assets/no-items.png')}
            />
        </View>
    }

    return (
       <View>
        <AddTodo onSubmit={handleChangetextfield}/>
        {content}
       </View>
    );
}

const styles = StyleSheet.create({
    image_wrap: {
        alignItems: 'center',
        padding: 10,
        justifyContent:"center",
        height: 600,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    }
  });