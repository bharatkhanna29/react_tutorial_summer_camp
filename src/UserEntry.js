
import React, { useContext, useState } from 'react';
import { UserStateReducerContext } from './userContext';

const UserEntry = (props) => {

    const [editing, setEditing] = useState(false);
    const dispatch = useContext(UserStateReducerContext);

    const changeEditState = () => {
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

    const spanStyle = {
        backgroundColor: "red", 
    }

    return (
        <li>
            {editing ? 
                <input type="text" value={props.name} onChange={(e) => onChange(e, "Name")}/> : 
                <span style={spanStyle} className='name'>{props.name}</span>
            }
            &nbsp; &nbsp; &nbsp; 
            {editing ? 
                <input type="text" value={props.college} onChange={(e) => onChange(e, "College")}/> :
                <span>{props.college}</span>
            }
            &nbsp; &nbsp; &nbsp; 
            <span>{props.grad_year}</span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={changeEditState}>{editing ? "Save Entry" : "Edit Entry"}</button>
            <button onClick={() => dispatch(
                {
                    "type": "delete",
                    "name": props.name
                }
            )}>Delete entry</button>
        </li>
    )
}

export default React.memo(UserEntry)