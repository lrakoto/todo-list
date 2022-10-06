import React, { useState } from 'react';
import ListItem from './ListItem';

function MyList(props) {
    const [todos, setTodos] = useState(props.newList);
    const [newItem, setNewItem] = useState('');

    console.log(setTodos);

    const clearList = () => {
        setTodos([]);
    }

    const handleChange = (e) => {
        setNewItem(e.target.value);
    }

    const addItem = (e) => {
        e.preventDefault();
        let newList = todos;
        newList.push(newItem);
        setTodos(newList);
        setNewItem('');
    }

    const removeItem = (index) => {

        let itemsToRemove = todos.filter((item, itemIdx) => {
            if (index === itemIdx) {
                return false;
            } else {
                return true;
            }
        });
        setTodos(itemsToRemove);
    }

    const renderNewToDoList = () => {
        let newToDoList = todos.map((todo, idx) => {
            return <ListItem key={`task${idx}`} todo={todo} index={idx} removeItem={removeItem} />
        });
        return newToDoList;
    }
    return (
        <div>
            <h1>Things I should stop procrastinating:</h1>
            <form onSubmit={addItem}>
                <input type="text" value={newItem} onChange={handleChange}/>
                <button type="submit">Add To List</button>
            </form>
            <ul>
                {renderNewToDoList()}
            </ul>
            <button onClick={clearList}>Clear List</button>
        </div>
    );
}

export default MyList;