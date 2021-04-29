import { ADD_TODO, DELETE_TODO } from '../constants';

const initState = {
   todos: [
       {id: 1, title: 'Todo 1'},
       {id: 2, title: 'Todo 2'},
       {id: 3, title: 'Todo 3'},
       {id: 4, title: 'Todo 4'}
    ],
}
const todoReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch(type){
        case ADD_TODO: {
            return {
                ...state,
                todos:
                [...state.todos, payload]
            }
        }
        case DELETE_TODO : {
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        }
        default:
            return state;
    }    
}

export default todoReducer
