import { useState } from "react";

function Chat({contact}) {
    const [text, setText] = useState('');
    return (
        <section className="chat">
            <textarea 
            value={text}
            placeholder={'chat to' + contact.name}
            onChange={e => setText(e.target.value)}
            />
        </section>
    )
}



function ContactList({
    selectedContact,
    contacts,
    onSelect
}) {
    return (
        <section className="contact-list">
            <ul>
                {
                    contacts.map(contact =>
                        (
                        <li key={contact.id}>
                            <button
                            onClick={()=> {
                                onSelect(contact)
                            }}
                            >
                                {contact.name}
                            </button>

                        </li>))
                }
            </ul>
        </section>
    )
}


export default function ChatRoom() {
    const [to, setTo] = useState(contacts[0])

    return (
        <div>
            <h1>Rendering with id to change state when the contanct is changed</h1>
            <ContactList
            contacts={contacts}
            selectedContact={to}
            onSelect={contact => setTo(contact)}
            />

            {/* providing id here will update the state when the name will be changed */}
            <Chat key={to.id} contact={to}/>
        </div>
    )
}

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
  ];