import { useState } from "react"



export default function TaskList ( {todos, setToDos} ) {

    return (

            <div className="tasklist">
                {todos.map(t => (
                 <Task
                 task={t}
                 setToDos={setToDos}
                 todos={todos}
                 key={t.id}
                 />
                ))}
            </div>
    )
}


function Task ({task, setToDos, todos }) {
    const [isEditing, setIsEditing] = useState(false)

    let todoContent;

    if (isEditing){
        todoContent = (
            <>
            <input
            type="text"
            value={task.title}
            
            />
            {' '}
            <button
            onClick={() => setIsEditing(false)}
            >save</button>
            {' '}
            </>
        )
    } else {
        todoContent = (
            <>
                    <label htmlFor="">
                    <input type="checkbox" />
                    {task.title} {task.id}
                    </label>
                    {' '}
                    <button
                    onClick={ () => setIsEditing(true)}
                    >Edit</button>
                    {' '}
            </>
        )
    }


    return(
            <li>
            {todoContent}

            <button
            onClick={() => {
                setToDos(todos.filter(t => t.id !== task.id))
            }}
            >Delete</button>

            </li>
    )

}