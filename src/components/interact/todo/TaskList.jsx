import { useState } from "react"



export default function TaskList ( {todos, setToDos, onEdit, eTitle, setETitle} ) {

    

    return (

            <div className="tasklist">
                {todos.map((t, index) => (
                 <Task
                 task={t}
                 setToDos={setToDos}
                 todos={todos}
                 key={t.id}
                 onEdit={onEdit}
                 eTitle={eTitle}
                 setETitle={setETitle}
                 dragindx={index}
                 
                 />
                ))}
            </div>
    )
}


function Task ({task, setToDos, todos, onEdit, eTitle, setETitle, dragindx}) {
    const [isEditing, setIsEditing] = useState(false)

    function handleDragStart (e, index) {
        e.dataTransfer.setDate('index', index);
    }

    function handleDragOver (e) {
        e.preventDefault();
    }

    function handleDrop(e, newIndex) {
        e.preventDefault();
        const oldIndex = e.dataTransfer.getData('index');
        const newToDos = [...todos];
        const [draggedTodo] = newToDos.splice(oldIndex, 1);
        newToDos.splice(newIndex, 0, draggedTodo)

        setToDos(newToDos);

    }


    // function handleDrop(e, newIndex) {
    //     e.preventDefault();
    //     const oldIndex = e.dataTransfer.getData('index');
    //     const newToDos = [...todos]; // Create copy of todos
    //     const [draggedTodo] = newToDos.splice(oldIndex, 1);
      
    //     // Adjust indexes based on newIndex
    //     if (newIndex > oldIndex) {
    //       newToDos.splice(newIndex + 1, 0, draggedTodo); // Insert after new index
    //     } else {
    //       newToDos.splice(newIndex, 0, draggedTodo); // Insert before new index
    //     }
      
    //     // Update state with new array
    //     setToDos(newToDos);
    //   }

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
            <li
            draggable
            onDragStart={(e) => handleDragStart(e, dragindx)}
            onDragOver={handleDragOver}
            onDrop={e => handleDrop(e, dragindx)}
            >
            {todoContent}

            <button
            onClick={() => {
                setToDos(todos.filter(t => t.id !== task.id))
            }}
            >Delete</button>

            </li>
    )

}