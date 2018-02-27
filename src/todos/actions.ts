import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';
let nextTodoId = 0;

interface AddTodo {
    type: ADD_TODO,
    completed: boolean,
    id: number | string,
    text: string
};

export const addTodo = (text: string): AddTodo => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId++,
    text: text
});

interface ToggleTodo {
    type: TOGGLE_TODO,
    id: number | string
}

export const toggleTodo = (id: string): ToggleTodo => ({
    type: TOGGLE_TODO,
    id
});

interface RemoveTodo {
    type: REMOVE_TODO,
    id: number | string
}

export const removeTodo = (id: string): RemoveTodo => ({
    type: REMOVE_TODO,
    id
});

export type TodoAction = AddTodo | ToggleTodo | RemoveTodo;