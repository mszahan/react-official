import { useState } from "react"



export default function TaskList ( {todos, setToDos, onEdit, eTitle, setETitle} ) {

    return (

            <div className="tasklist">
                {todos.map(t => (
                 <Task
                 task={t}
                 setToDos={setToDos}
                 todos={todos}
                 key={t.id}
                 onEdit={onEdit}
                 eTitle={eTitle}
                 setETitle={setETitle}
                 />
                ))}
            </div>
    )
}


function Task ({task, setToDos, todos, onEdit, eTitle, setETitle }) {
    const [isEditing, setIsEditing] = useState(false)

    let todoContent;

    if (isEditing){
        todoContent = (
            <>
            <input
            type="text"
            value={eTitle}
            onChange={(e) => {

                setETitle(e.target.value)
            }}
            
            />
            {' '}
            <button
            onClick={() => {
                setIsEditing(false)
                onEdit(task.id)
            }}
            >save</button>
            {' '}
            </>
        )
    } else {
        todoContent = (
            <>
                    <label htmlFor="">
                    <input type="checkbox" />
                    {task.title}
                    </label>
                    {' '}
                    <button
                    onClick={ () => {
                        setIsEditing(true)
                        setETitle(task.title)
                    }}
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