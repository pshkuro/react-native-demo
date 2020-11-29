import { FontDisplay } from 'expo-font';
import React, {useReducer, useContext} from 'react';
import { Alert } from 'react-native';

import { ScreenContext } from '../screen/screenContext';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, FETCH_TODOS, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR } from '../types';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';

// Создаем контекст и с помощью него прокидываем наш store и actions в компоненты)
export const TodoState = ({children}) => {
    const initialArg = {
        todos: [],
        loading: false,
        error: false,
    }

    const {changeScreen} = useContext(ScreenContext);
    // const [state, dispatch] = useReducer(reducer, initialArg, init);
    const [state, dispatch] = useReducer(todoReducer, initialArg);


    // Это просто actions
    const addTodo = async title => {
        const response = await fetch(
        'https://react-native-todo-app-dffe4.firebaseio.com/todos.json', 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title})
        });
        const {name} = await response.json();
        dispatch({type: ADD_TODO, title, id: name});
    };

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

    const showLoader = () => dispatch({type: SHOW_LOADER});
    const hideLoader = () => dispatch({type: HIDE_LOADER});
    const clearError = () => dispatch({type: CLEAR_ERROR});
    const showError = (error) => dispatch({type: SHOW_ERROR, error});
    const getTodos = (todos) => dispatch({type: FETCH_TODOS, todos});

    // Provider позволяет дочерним компонентам подписаться на изменения Context
    return <TodoContext.Provider value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo
    }}>{children}</TodoContext.Provider>
}