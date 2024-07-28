import React from "react";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Collapse from '@mui/material/Collapse';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  return (
    <div>
      <form onSubmit={props.addFunction}>
        <Collapse in={props.bool} timeout={500} >
        <input
          name="title"
          placeholder="Title"
          onChange={props.updateTitle}
          value={props.title}
          autoComplete="off"
        />
        </Collapse>
         <textarea
          name="content"
          placeholder="Take a note..."
          rows={props.bool ? "5":"1"}
          onChange={props.updateContent}
          value={props.content}
          onClick={props.boolfunc}
        />
        <Zoom in={props.bool} style={{ transitionDelay: props.bool ? '500ms' : '0ms' }}><button type="submit"><PlaylistAddIcon /></button></Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
