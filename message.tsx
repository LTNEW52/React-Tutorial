// PascalCasing (First Letter Of Every Word Is Capital)
function Message () {
    // JSX; JavaScript XML
    const name = "Labib";
    if (name) {
        return <h1>Hello World! Hello {name}</h1>; // ; Is Important
    } else {
        return <h1>Hello World!</h1>
    }
    
}

export default Message;