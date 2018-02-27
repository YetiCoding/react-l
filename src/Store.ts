import { createStore, combineReducers } from 'redux';

import { reducer as filterReducer } from './filter';
import { reducer as todosReducer } from './todos';

const reducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer
});

export default createStore(reducer);
