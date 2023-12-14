


export default function TaskList ( {todos, setToDos} ) {
    return (
        <div className="tasklist">
            {todos.map(p => (
            <li key={p.id}>
                <label htmlFor="">
                <input type="checkbox" />
                 {p.title} {p.id}
                </label>
                {' '}
                <button>Edit</button>
                {' '}
                <button
                onClick={() => {
                    setToDos(todos.filter(t => t.id !== p.id))
                }}
                >Delete</button>
            </li>
            ))}
        </div>
    )
}