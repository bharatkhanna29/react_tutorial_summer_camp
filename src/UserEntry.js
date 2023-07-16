
import React, { useContext, useState } from 'react';
import { UserStateReducerContext } from './userContext';
import { deleteUser, updateUser } from './UserClient';

const spanStyle = {
    backgroundColor: "red", 
}

const UserEntry = (props) => {

    const [editing, setEditing] = useState(false);
    const dispatch = useContext(UserStateReducerContext);

    const changeEditState = () => {
        if (editing) {
            updateUser(props.id, {
                name: props.name,
                college: props.college 
            }, dispatch)
        }
        setEditing(!editing);
    }

    const onChange = (e, property) => {
        dispatch({
            "type": "edit",
            "name": props.name,
            "property": property,
            "newValue": e.target.value
        })
    }

    return (
        <li>
            {editing ? 
                <input type="text" value={props.name} onChange={(e) => onChange(e, "name")}/> : 
                <span style={spanStyle} className='name'>{props.name}</span>
            }
            &nbsp; &nbsp; &nbsp; 
            {editing ? 
                <input type="text" value={props.college} onChange={(e) => onChange(e, "college")}/> :
                <span>{props.college}</span>
            }
            &nbsp; &nbsp; &nbsp; 
            <span>{props.grad_year}</span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={changeEditState}>{editing ? "Save Entry" : "Edit Entry"}</button>
            <button onClick={() => deleteUser(props.id, dispatch)}>Delete entry</button>
        </li>
    )
}

export default React.memo(UserEntry)