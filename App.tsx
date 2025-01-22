/* import Message from "./message" */
import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/button";
import { useState } from "react";

function App() {
  const cities = ["New York", "Tokyo", "Dhaka", "Karachi", "Kolkata"];
  const fruites = ["Apple", "Mango", "JackFruit", "Banana", "Orange"];
  const name = ["Labib", "Tahmid", "DeathStroke", "Alex Mason", "Ghost"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  /* return <div><Message></Message></div> */
  /* return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
      <ListGroup
        items={fruites}
        heading="Fruites"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
      <ListGroup
        items={name}
        heading="Names"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
    </div>
  ); */

  /* return (
    <>
      <Alert text="Alert!!!" />
      <Alert text="New Alert!!!"></Alert>
      <Alert text="Another New Alert!!!"></Alert>
    </>
  ); */

  // we can use children element instead of the above

  /* return (
    <>
      <Alert>Alert!!!</Alert>
      <Alert>New Alert!!!</Alert>
      <Alert>Another New Alert!!!😂</Alert>
    </>
  ); */

  // And if we want to pass html content in child

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          New <h1>Alert!!!</h1>
        </Alert>
      )}

      <Button
        clicked={() => {
          setAlertVisibility(true);
        }}
        color="primary"
      >
        Click Me!😊
      </Button>

      <Button
        clicked={() => {
          setAlertVisibility(false);
        }}
        color="secondary"
      >
        Do Not Click Me!😒
      </Button>

      <Button
        clicked={() => {
          console.log("clicked");
        }}
        color="dark"
      >
        React is Tough!🤔
      </Button>
    </>
  );
}

export default App;
