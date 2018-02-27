import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';
import { TodoAction } from 'src/todos/actions';
import { Todo } from './types';
export default (state: Array<Todo> = [], action: TodoAction) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: action.completed
                },
                ...state
            ]
        case TOGGLE_TODO:
            return state.map((todoItem) => (
                {
                    completed: todoItem.id === action.id ? !todoItem.completed : todoItem.completed,
                    ...todoItem
                }
            ))
        case REMOVE_TODO:
            return state.filter((todoItem) => todoItem.id !== action.id);
        default:
            return state;
    }
}