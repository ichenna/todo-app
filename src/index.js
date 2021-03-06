import React from 'react';
import  ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from "./components/todo-list";

const App = () => {
    return (
    <div>
        <AppHeader />
        <SearchPanel />
        <TodoList />
    </div>
    );
}
const el = <App />;

ReactDom.render(el, document.getElementById('root'));
