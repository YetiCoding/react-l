import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoApp } from './TodoApp';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

ReactDOM.render(
  <Provider>
    <TodoApp />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
