function AlertButton({message, children}) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    )
}

export default function ToolBar() {
    return (
        <div>
            <AlertButton message={'started playing the movie'}>
                Playe Movie
            </AlertButton>

            <AlertButton message={'you cannot upload image'}>
                Upload image
            </AlertButton>
        </div>
    )
}




export function Button(){
    function handleClick() {
        alert('you clicked the button')
    }

    return (
        <button onClick={handleClick}>
            Click
        </button>
    )
}