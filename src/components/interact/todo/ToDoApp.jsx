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
    const [eTitle, setETitle] = useState('')


    function handleTitleChange(e) {
        setTaskTitle(e.target.value)
    }

    function handleAddTask(){
        if (taskTitle !=='') {
            const nextTodo = [...todos, {id:nId++, title:taskTitle, complete:false}]
            setToDos(nextTodo);
            setTaskTitle('');
        }
    }

    function handleEditTask(taskId) {
        const updatedTodo = [
            ...todos.slice(0, taskId),
            {id: taskId, title:eTitle, complete:false},
            ...todos.slice(taskId+1)
        ]

        setToDos(updatedTodo);
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
            onEdit={handleEditTask}
            eTitle={eTitle}
            setETitle={setETitle}
            todos={todos}/>
        </div>
    )
}