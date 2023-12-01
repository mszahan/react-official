function Avatar ({person, size, color, height}) {
    return (
        <div>
            <hr />
            <p>Sprading props to reduce the repeataion</p>
            <hr />
            <p>name: {person.name}</p>
            <p>age: {person.age}</p>
            <p>role: {person.role}</p>
            <p>Size of the product: {size}</p>
            <p>color of the product {color} </p>
            <p> Height of the product {height} </p>

        </div>
    )
}

function Card (props) {
    return (
        <div>
            <Avatar {...props}/>
        </div>
    )
}

function Main () {
    const person = {
        name:'Roman',
        age:25,
        role:'CEO'
    }

    return (
        <div>
            <Card 
            person={person}
            size='100'
            color='red'
            height={75}
            />
        </div>
    )


}

export default Main;