import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is react?",
    content: "React is this",
  },
  {
    title: "Why is react?",
    content: "React is that",
  },
  {
    title: "How is react?",
    content: "React is fun",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
