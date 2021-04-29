import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../../store/actions/todoActions';
import {v4 as uuidv4 } from 'uuid';
import './addForm.css';

const AddForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: uuidv4,
            title
        }
        dispatch(addTodo(newTodo));
        setTitle('');
    }
    return (
        <div className='addForm'>
            <form onSubmit={handleSubmit}>
            <input type="text" name='title' onChange={e => setTitle(e.target.value)} value={title} required />
            <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddForm;
