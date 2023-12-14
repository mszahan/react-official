import { useState } from "react";
import AddToDo from "./AddToDo";
import TaskList from "./TaskList";




export default function ToDoApp() {
    return (
        <div className="todo-app">
            <h1>Todo list</h1>
            <AddToDo/>
            <TaskList/>
        </div>
    )
}