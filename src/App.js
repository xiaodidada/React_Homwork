import React, { useCallback, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListHeader from './TodoListHeader.js';
import TodoList from './TodoList'
//入口文件
class App extends Component{
  render(){
  //返回JSX代码
    return (
      <div className="App">
       <TodoListHeader />
       <TodoList />
      </div>
    );
  }
}
export default App;
