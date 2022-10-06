import React from 'react';

function ListItem (props) {
    return(
        <div>
            <li>{props.todo} <button onClick={() => props.removeItem(props.index)}>Check Off</button></li>
        </div>
    )
}

export default ListItem;