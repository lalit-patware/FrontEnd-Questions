import React from 'react';
// import DisplayTodo from './components/FetchData';
import {TaskBoard} from './components/TaskBoard';
// import { Display } from './components/minorProject/Display';
// import { TodoList } from './components/minorProject/TodoList';
// import Counter from './components/Counter';
// import DynamicInput from './components/minorProject/DynamicInput';
// import MultiStepForm from './components/Steps-project-without-router/MultiStepForm';
// import DisplayData from './components/minorProject/displayCard&search';
// import TodoListNew from './components/minorProject/TodoListWithDragItems';
import ImplementDebounce from './components/minorProject/ImplementDebouce';
import EcomCart from './components/minorProject/Cart';
import List from './components/List';
import { TodoList } from './components/minorProject/TodoList';
function App() {
  // const arr = [1,2,3]
  // console.log(arr.length)
  return (
    <div className="App">
     {/* <DisplayTodo /> */}
      {/* {arr.length && <p>test</p>} */}
     {/* <TaskBoard /> */}
     {/* <Display/> */}
     {/* <TodoList /> */}
     {/* <Counter /> */}
     {/* <DynamicInput /> */}
     {/* <MultiStepForm/> */}
      {/* <DisplayData /> */}
      {/* <TodoListNew /> */}
      {/* <ImplementDebounce /> */}
      {/* <EcomCart /> */}
      {/* <List /> */}
      <TodoList />
    </div>
  );
}

export default App;
