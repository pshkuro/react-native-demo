import React, {useReducer, useContext} from 'react';
import { Alert } from 'react-native';

import { ScreenContext } from '../screen/screenContext';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';

// Создаем контекст и с помощью него прокидываем наш store и actions в компоненты)
export const TodoState = ({children}) => {
    const initialArg = {
        todos: [],
    }

    const {changeScreen} = useContext(ScreenContext);

    // const [state, dispatch] = useReducer(reducer, initialArg, init);
    const [state, dispatch] = useReducer(todoReducer, initialArg);


    // Это просто actions
    const addTodo = title => dispatch({type: ADD_TODO, title});

    const removeTodo = id => {
        const todo = state.todos.find(item => item.id);

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
                    changeScreen(null);
                    dispatch({type: REMOVE_TODO, id});
                } 
            }
            ],
            { cancelable: false }
    );

    };

    const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title});

    // Provider позволяет дочерним компонентам подписаться на изменения Context
    return <TodoContext.Provider value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo
    }}>{children}</TodoContext.Provider>
}