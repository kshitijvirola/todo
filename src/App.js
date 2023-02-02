import logo from './logo.svg';
import '../src/componet/Todo.css';
import Todo from './componet/Todo';
import Form from './componet/Form';
import { deleteAll } from './redux/todoapp/actions'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';



function App() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.rootReducer.todoReducer);
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  const handleEditClick = (todo) => {
    setEdit(true);
    setEditTodo(todo);
  }
  const cancelUpdate=()=>{
    setEdit(false);
  }
  return (
    <div >
      <Form edit={edit} editTodo={editTodo} cancelUpdate={cancelUpdate} />
      <ol className='list-style'>
        <Todo handleEditClick={handleEditClick} edit={edit} />
      </ol>
      {todos.length > 1 && (<button className='btn btn-dark w-100' onClick={() => dispatch(deleteAll())}>Delete All</button>)}
    </div>

  );
}

export default App;
