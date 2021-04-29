import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {deleteTodo} from '../../store/actions/todoActions'
import AddForm from "./AddForm";

const Todo = (props) => {
  const todos = useSelector(state => state.todoReducer.todos);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div>
        <AddForm />
      {todos.map((todo) => {
        return (
          <li key={todo.id} style={{listStyle: 'none'}}>
            <span style={{margin: '0px 30px'}}>{todo.title}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        );
      })}
    </div>
  );
};

export default Todo;
