import React, { useState } from "react";

function AddToDo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (!title && desc) {
      alert("Title cannot be blank!!!");
    } else if (!desc && title) {
      alert("Description cannot be blank!!!");
    } else if (!title && !desc) {
      alert("Title and Description cannot be blank!!");
    }
      props.addToDo(title, desc);
      setTitle("");
      setDesc("");

  };
  return (
    <div className="container">
      <h3 className="text-center my-3 text-decoration-underline">Add a ToDo</h3>
      <form onSubmit={add}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            ToDo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title "
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            ToDo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success ">
          Add To-Do
        </button>
      </form>
    </div>
  );
}

export default AddToDo;
