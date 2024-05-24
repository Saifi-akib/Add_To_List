import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [text, SetText] = useState([]);
  const [newText, setNewText] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    console.log("text", text);
  }, [text]);

  const addtypetext = () => {
    if (newText != "") {
      SetText([...text, newText]);
      setNewText("");
    }
  };
  const deletetext = (index) => {
    const updatedText = [...text];
    updatedText.splice(index, 1);
    SetText(updatedText);
  };

  return (
    <>
      <div className="App">
        <h1>Add To Do List</h1>

        <div className="input-box">
          <input
            type="text"
            onChange={(e) => setNewText(e.target.value)}
            value={newText}
            className="text-input"
          />
          <button onClick={addtypetext} className="add-button-type">
            Add
          </button>
        </div>
        <div className="Show-data container">
          <h3>List: </h3>
          <br />
          {text.map((item, index) => (
            <div key={index} className="todo-item">
              <span>{index + 1}. </span>
              <span className="item-text">{item}</span>
              <button
                onClick={() => deletetext(index)}
                className="delete-text-button"
              >
                Delete
              </button>
              <button
                className="edit-text-button"
                onClick={() => editTextbutton(index)}
              >
                {" "}
                Edit{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
