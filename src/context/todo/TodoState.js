import React, {useReducer} from 'react';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';

export const TodoState = ({children}) => {
    const initialArg = {
        todos: [],
    }

    // const [state, dispatch] = useReducer(reducer, initialArg, init);
    const [state, dispatch] = useReducer(todoReducer, initialArg);


    // Это просто action creators
    const addTodo = title => dispatch({type: ADD_TODO, title});

    const removeTodo = id => dispatch({type: REMOVE_TODO, id});

    const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title});

    // Provider позволяет дочерним компонентам подписаться на изменения Context
    return <TodoContext.Provider value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo
    }}>{children}</TodoContext.Provider>
}