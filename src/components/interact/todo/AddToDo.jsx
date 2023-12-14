
export default function AddToDo ({onTitleChange, onAdd, title}) {
    return (
        <div className="add-todo">
            <input
            value={title}
            onChange={onTitleChange}
            type="text" />
            <button
                onClick={onAdd}
            >
                Add task
            </button>
        </div>
    )
}