import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {
  return (
    <div className="note" id={props.id}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={function (){
        return props.delFunc(props.id)
      }} ><DeleteIcon /></button>
    </div>
  );
}

export default Note;
