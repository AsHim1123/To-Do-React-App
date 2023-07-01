import React from "react";
import TodoItem from "./TodoItem";

function Todos(props) {
  return (
    <div className="container">
      <h2 className="text-center my-3 text-decoration-underline">ToDos List</h2>
      {props.todos.length === 0
        ? "No To-Dos to Display"
        : props.todos.map((event) => {
            return <TodoItem key={event.sno} todo={event} deleteItem={props.deleteItem} />;
          })}
    </div>
  );
}

export default Todos;

