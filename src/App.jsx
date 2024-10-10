import { useState } from "react";
import { MyList } from "./components/my-list";
import { MyButton } from "./components/my-button";

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Henry",
  "Isabella",
  "Jack",
  "Kate",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Peter",
  "Quinn",
  "Rachel",
  "Sam",
  "Sophia",
  "Tim",
  "Ursula",
  "Victor",
  "Wendy",
  "Xavier",
  "Yolanda",
  "Zoe",
];

function App() {
  const [revealedNames, setRevealedNames] = useState([]);

  const revealNextName = () => {
    if (revealedNames.length < names.length) {
      setRevealedNames([...revealedNames, names[revealedNames.length]]);
    }
  };

  return (
    <div className="grid grid-cols-2 m-7 border-blue-500 border-2 p-16 text-center">
      <div>
        <MyList revealedNames={revealedNames} />

        {revealedNames.length === names.length && (
          <p>These are all the names of the award winners</p>
        )}
      </div>
      <div>
        <MyButton revealNextName={revealNextName} revealedNames={revealedNames} names={names} />
      </div>
    </div>
  );
}

export default App;
