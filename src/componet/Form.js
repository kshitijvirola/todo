import { useEffect, useState } from 'react'
import './Todo.css';
import Todo from './Todo';
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/todoapp/actions';
import { FaBackspace  } from "react-icons/fa";

export default function Form({ edit, editTodo, cancelUpdate }) {
    const [todoValue, setTodoValue] = useState("")
    const [editValue, setEditValue] = useState("");
    useEffect(() => {
        setEditValue(editTodo.todo)
    }, [editTodo])
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj = {
            id: time,
            todo: todoValue,
            completed: false
        }
        setTodoValue('')
        dispatch(addTodo(todoObj))
    }

    const editSubmit = (e) => {
        e.preventDefault();
        let editedObj = {
            id: editTodo.id,
            todo: editValue,
            completed: false
        }
        dispatch(handleEditSubmit(editedObj))

    }


    return (
        <div>

            <h1>What do you need to do?</h1>
            {edit === false ? (
                <form onSubmit={handleSubmit} >
                    <input
                        type="text"
                        placeholder="Enter"
                        required
                        value={todoValue}
                        onChange={(e) => setTodoValue(e.target.value)}
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <div> 
                     <div>
                    <FaBackspace className="text-dark" style={{cursor: 'pointer'}} onClick={cancelUpdate}/>
                    </div>
                    <form onSubmit={editSubmit} >
                        <input
                            type="text"
                            placeholder="Enter"
                            required
                            value={editValue || ""}
                            onChange={(e) => setEditValue(e.target.value)}
                        />
                        <button type="submit">Update</button>
                    </form>
                   
                </div>

            )}



        </div>
    )
}
