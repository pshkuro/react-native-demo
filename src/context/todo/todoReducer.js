import {ADD_TODO, UPDATE_TODO, REMOVE_TODO, SHOW_LOADER, HIDE_LOADER, FETCH_TODOS, SHOW_ERROR, CLEAR_ERROR} from '../types';

// Просто actions creators
const handlers = {
    [ADD_TODO]: (state, {title}) => ({
        ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now().toString(),
                        title,
                    }
                ]
    }),

    [REMOVE_TODO]: (state, {id}) => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== id),
    }),

    [UPDATE_TODO]: (state, {id, title}) => ({
        ...state,
        todos: state.todos.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            } 
        return todo;
        })
    }),

    [SHOW_LOADER]: (state) => ({...state, loading: true}),
    [HIDE_LOADER]: (state) => ({...state, loading: false}),
    [SHOW_ERROR]: (state, { error }) => ({...state, error}),
    [CLEAR_ERROR]: (state) => ({...state, error: null}),
    [FETCH_TODOS]: (state, {todos}) => ({...state, todos}),

    DEFAULT: state => state,
}

export const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}