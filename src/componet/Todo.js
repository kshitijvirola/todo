import React, { useState } from 'react'
import './Todo.css';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { removeTodo,handleCheckbox } from '../redux/todoapp/actions';

export default function Todo({ handleEditClick, edit }) {
  
    const todos = useSelector((state) => state.rootReducer.todoReducer);
    const dispatch = useDispatch();
    // console.log(todos);


    return (todos.map((data) => (

        <div key={data.id} className='d-flex justify-content-between align-items-center' >
          
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                {edit===false&&(
                    <input type="checkbox" checked={data.completed} onChange={() => dispatch(handleCheckbox(data.id))} />
                )}
                </div>
                <li className='text-dark ' style={data.completed == true ? { textDecoration: 'line-through', marginLeft: '50px', padding: "10px" } : { textDecoration: 'none', marginLeft: '50px', padding: "10px" }} >{data.todo}</li>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
            {edit===false&&(
                <>
                 <FaEdit className='text-dark ' style={{ fontSize: '25px',cursor: 'pointer' }} onClick={() => handleEditClick(data)} />
                 <FaTrashAlt className='text-dark' style={{ fontSize: '25px', marginLeft: '15px',cursor: 'pointer' }} onClick={() => dispatch(removeTodo(data.id))} />
                 </>
            )}      
            </div>
        </div>
        )))
}
