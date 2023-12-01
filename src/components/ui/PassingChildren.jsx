
function Parent ({children}) {
    return (
        <div className="parent">
            <h4>This is from the parent</h4>
            {children}
        </div>
    )
}


function Child () {
    return (
        <div className="chi">
            <h5>I am from the child</h5>
        </div>
    )
}


function Continer () {
    return (
        <Parent>
            <Child/>
        </Parent>
    )
}

export default Continer;