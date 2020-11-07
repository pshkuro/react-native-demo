import React, {useReducer} from 'react';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';

export const TodoState = ({children}) => {
    const initialArg = {
        todos: [],
    }

    // const [state, dispatch] = useReducer(reducer, initialArg, init);
    const [state, dispatch] = useReducer(todoReducer, initialArg);

    // Provider позволяет дочерним компонентам подписаться на изменения Context
    return <TodoContext.Provider value={{
        todos: state.todos,
    }}>{children}</TodoContext.Provider>
}