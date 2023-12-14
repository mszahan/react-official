import { useState } from "react";
import AddToDo from "./AddToDo";
import TaskList from "./TaskList";

const initialTodo = [
    // {id: 0, title: 'Read the book', complete:false},
    // {id: 1, title: 'Write the journal', complete:true},
    // {id: 2, title: 'Solve the problems', complete:false}
]



let nId = 0
export default function ToDoApp() {

    const [todos, setToDos] = useState(initialTodo)
    const [taskTitle, setTaskTitle] = useState('')

    function handleTitleChange(e) {
        setTaskTitle(e.target.value)
    }

    function handleAddTask(){
        const nextTodo = [...todos, {id:nId++, title:taskTitle, complete:false}]
        setToDos(nextTodo);
        setTaskTitle('');
    }


    return (
        <div className="todo-app">
            <h1>Todo list</h1>
            <AddToDo 
            onAdd={handleAddTask}
            onTitleChange={handleTitleChange}
            title={taskTitle}
            />
            <TaskList
            setToDos={setToDos}
            todos={todos}/>
        </div>
    )
}