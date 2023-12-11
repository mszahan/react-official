import { useState } from "react";

function MovingDot () {
    const [position, setPosition] = useState( {
        x:0,
        y:0
    });

    return(
        <div 
        onPointerMove={ e => {
            setPosition({
                x:e.clientX,
                y:e.clientY
            });
        }}
        style={{
            position:'relative',
            width: '100vw',
            height: '100vh',
        }}
        >
            <div style={
                {
                    position:'absolute',
                    backgroundColor:'#124E5F',
                    borderRadius:'50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: -10,
                    top:-10,
                    width:20,
                    height:20,
                }
            }>

            </div>

        </div>
    )
}


function Form () {
    const [person, setPerson] = useState({
        firstName:'Alex',
        lastName:'Armas',
        email:'alex@email.com'
    });

    function handleFirstNameChange(e) {
        setPerson( {
            ...person,
            firstName: e.target.value
        })
    }

    function handleLastNameChange(e) {
        setPerson( {
            ...person,
            lastName: e.target.value
        })
    }

    function handleEmailChange(e) {
        setPerson( {
            ...person,
            email: e.target.value
        })
    }


    return (
        <div className="formwithmultiple">
            <h1>The form with multiple onchange handler</h1>
            <div className="form">
            <form action="" className="main-form">

            <label htmlFor="">
                First name:
                <input
                type="text" 
                value={person.firstName}
                onChange={handleFirstNameChange}
                />
            </label>

            
            <label htmlFor="">
                Last name:
                <input
                type="text" 
                value={person.lastName}
                onChange={handleLastNameChange}
                />
            </label>

            <label htmlFor="">
                Email:
                <input
                type="text" 
                value={person.email}
                onChange={handleEmailChange}
                />
            </label>

            <div className="info">
                <p>The first name is - {person.firstName}</p>
                <p>The last name is - {person.lastName}</p>
                <p>The email is - {person.email}</p>
            </div>

            </form>
            </div>




        </div>
    )
}


function SingleForm () {
    const [person, setPerson] = useState({
        firstName:'Alex',
        lastName:'Armas',
        email:'alex@email.com'
    });

    function handleChange(e) {
        setPerson( {
            ...person,
            [e.target.name]: e.target.value

        })
    }


    return (
        <div className="formwithmultiple">
            <h1>The form with single onchange handler</h1>
            <div className="form">
            <form action="" className="main-form">

            <label htmlFor="">
                First name:
                <input
                name="firstName"
                type="text" 
                value={person.firstName}
                onChange={handleChange}
                />
            </label>

            
            <label htmlFor="">
                Last name:
                <input
                name="lastName"
                type="text" 
                value={person.lastName}
                onChange={handleChange}
                />
            </label>

            <label htmlFor="">
                Email:
                <input
                name="email"
                type="text" 
                value={person.email}
                onChange={handleChange}
                />
            </label>

            <div className="info">
                <p>The first name is - {person.firstName}</p>
                <p>The last name is - {person.lastName}</p>
                <p>The email is - {person.email}</p>
            </div>

            </form>
            </div>




        </div>
    )
}


function NestedForm() {
    const [person, setPerson] = useState({
        name:'Alex',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    })

    function handleNameChange(e) {
        setPerson({
            ...person,
            name:e.target.value
        });
    }


    function handleTitleChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        });
    }


    function handleCityChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        });
    }


    function handleImageChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        })
    }

    return (
        <div className="nextedForm">
            <h1>Updating the value in nested objects</h1>

            <form action="">

            <label htmlFor="">
                Name:
                <input
                type="text"
                value={person.name}
                onChange={handleNameChange}
                />
            </label>

            
            <label htmlFor="">
                Title:
                <input
                type="text"
                value={person.artwork.title}
                onChange={handleTitleChange}
                />
            </label>

            <label htmlFor="">
                City:
                <input
                type="text"
                value={person.artwork.city}
                onChange={handleCityChange}
                />
            </label>

            <label htmlFor="">
                Image:
                <input
                type="text"
                value={person.artwork.image}
                onChange={handleImageChange}
                />
            </label>

            </form>

            <div className="artwork">
                <p> name: {person.name} </p>
                <p> Artwork title: {person.artwork.title} </p>
                <p> Artwork City: {person.artwork.city} </p>
                <img src={person.artwork.image} alt="" />
            </div>


        </div>
    )


}

export default function ObjectState () {
    return (
        <div className="objectstate">
            <MovingDot/>
            <Form/>
            <SingleForm/>
            <NestedForm/>
        </div>
    )
}