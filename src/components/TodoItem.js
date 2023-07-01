import React from "react";

function TodoItem(props) {
  return (
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          props.deleteItem(props.todo);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
