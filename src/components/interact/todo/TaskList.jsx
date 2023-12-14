const initialTodo = [
    {id: 0, title: 'Read the book', complete:false},
    {id: 1, title: 'Write the journal', complete:true},
    {id: 2, title: 'Solve the problems', complete:false}
]



export default function TaskList () {
    return (
        <div className="tasklist">
            {initialTodo.map(p => <li key={p.id}> {p.title} </li>)}
        </div>
    )
}