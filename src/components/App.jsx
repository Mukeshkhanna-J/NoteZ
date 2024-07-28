import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNote] = useState([]);
  const [isExpand,setExpand]=useState(false);

  const expand=()=>{
    setExpand(true);
  }
  

  const updateTitle = (event) => {
    setTitle(event.target.value);
  };

  const updateContent = (event) => {
    setContent(event.target.value);
  };

  const updateNote = (event) => {
    const e=event.target;
    event.preventDefault();
    setNote(prevNote=>{
      return [...prevNote,{title:e.title.value,content:e.content.value}]
    })
    setTitle("");
    setContent("");
    setExpand(false);
  }

  const delete_note=(ID)=>{
    setNote(prevNote=>{
      return notes.filter((note,index)=>{
        return index!==ID 
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea
        addFunction={updateNote}
        updateTitle={updateTitle}
        title={title}
        updateContent={updateContent}
        content={content}
        bool={isExpand}
        boolfunc={expand}
      />
      {notes.map((note,index)=>{
        return <Note key={index} id={index} title={note.title} content={note.content} delFunc={delete_note} />
      })}
      <Footer />
    </div>
  );
}

export default App;
