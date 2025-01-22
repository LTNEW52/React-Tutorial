// Ctrl + d for changing in multiple line

// import { Fragment } from "react";

import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  // props helps to use single components in multiple use, like list of cities, list of fruites etc
  // using props, the useable variable must be props.items , props.heading
  // but we can break the props into {items , heading} too , so we can still use items, heading in below

  // In onSelectItem we do not need to pass values because it is only breaking the array to specific variable or function names

  /* return (
    // class is a reserved keyword for JS / TypeScript
    <div>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </div>
  ); */

  // one way to return multiple element is containing it inside div, else it will show error

  /* return (
    // class is a reserved keyword for JS / TypeScript
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </Fragment>
  ); */

  // Another way is to use Fragment.

  /* return (
    // class is a reserved keyword for JS / TypeScript
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  ); */

  // <> </> also means using a fragment

  // Dynamic list

  /* const items = ["New York", "Tokyo", "Dhaka", "Karachi", "Kolkata"];

  return (
    // class is a reserved keyword for JS / TypeScript
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  ); */

  // Second Bracket because, in react return you can only type html or other react component, to write JS in html you need {}
  // also bootstrap have specific name for css it seems, so no need to write css like before! Interesting!!
  // When mapping an array, for dynamic add or remove, array element must have a key to identify each elements, so key = {item.id} or something

  //let items = ["New York", "Tokyo", "Dhaka", "Karachi", "Kolkata"];
  // items = [];
  // let selectedIndex = -1;

  // now the selectedIndex is a local variable, how to change it?

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // so to change a variable , usestate is used. selectedIndex is a variable and setSelectedIndex is a function. when setSelectedIndex is updated, the variable is also updated using useState
  // Also to use useState, we need to import it because it is a built in function

  /* if (items.length === 0) {
    return (
      <>
        <h1>List</h1>
        <p>No Items Found!</p>
      </>
    );
  } */

  // but this means duplication, so another way is there

  return (
    // class is a reserved keyword for JS / TypeScript
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No Items Found!</p> : null}
      {
        items.length === 0 && <p>No Items Found!</p>
        /* This is better , it works this way, True && Something = Something , False && Something == False */
      }
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            /* className="list-group-item active" */ // active is a class in bootstrap to highlight
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            /* onClick={(event) => {
              console.log(event);
            }} */
            /* onClick={handleClick} */
            onClick={() => {
              //selectedIndex = index;
              setSelectedIndex(index);
              onSelectItem(item); // here we have to call the onselect function
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// Using Tenary Operator

/* const handleClick = (event) => {
  console.log(event);
}; */

// The problem is This outside function doesnt recognize event, so we need to import event type such as import MouseEvent

/* const handleClick = (event: MouseEvent) => {
    console.log(event.type);
}; */

// By specifing event: MouseEvent, we say the event is happening by mouse

// now using props
// {items: [] , heading: string}

interface Props {
  items: string[];
  heading: string;
  // adding a function
  onSelectItem: (item: string) => void;
}

export default ListGroup;
