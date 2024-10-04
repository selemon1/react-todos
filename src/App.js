import React, {useState} from 'react';
import './App.css';
//import TodoRowItem from './components/TodoRowItem';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';
function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  // const todos = [
  //   {rowNumber:1, rowDescription: 'Feed puppy', rowAssigned: 'User one'},
  //   {rowNumber:2, rowDescription: 'Water plants', rowAssigned: 'User two'},
  //   {rowNumber:3, rowDescription: 'Make dinner', rowAssigned: 'User one'},
  //   {rowNumber:4, rowDescription: 'Charge phone battery', rowAssigned: 'User one'}
  // ]
  const [todos, setTodos] = useState([
    {rowNumber:1, rowDescription: 'Feed puppy', rowAssigned: 'User one'},
    {rowNumber:2, rowDescription: 'Water plants', rowAssigned: 'User two'},
    {rowNumber:3, rowDescription: 'Make dinner', rowAssigned: 'User one'},
    {rowNumber:4, rowDescription: 'Charge phone battery', rowAssigned: 'User one'}
  ]
  )
  const addTodo = (description,assigned) => {
    //console.log('Our addTodo btn has been clicked!');
    let rowNumber = 0;
    if (todos.length > 0){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber,
        //rowNumber: todos.length + 1,
        // rowDescription: 'New Todo',
        // rowAssigned: 'User Three'
        rowDescription: description,
        rowAssigned: assigned
      };
      //todos.push(newTodo);
      setTodos(todos => [...todos, newTodo])
      //console.log(todos);
    
  }

  const deleteTodo = (deleteTodoRowNumber/*this id an identifier what to delate*/) => {
    let filtered = todos.filter(function (value){
      return value.rowNumber !== deleteTodoRowNumber;
    })
    setTodos(filtered);
  }
  return (
    <div className='mt-5 container' >
        <div className='card'>
          <div className='card-header'>
            Your Todo's
          </div>
          <div className='card-body'>
            <TodoTable todos={todos} deleteTodo={deleteTodo}/>
            <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary' /*onClick={addTodo}*/>
             
              {showAddTodoForm ? 'Close New Todo' : 'New Todo' /*this is called trinary operator*/} 
            </button>
          {showAddTodoForm &&  
            <NewTodoForm addTodo={addTodo}/>
          }
          </div>
        </div>
    </div>
  );
}

export default App;
