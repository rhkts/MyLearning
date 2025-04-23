import { useState } from "react";

function Mybutton() {
  return <button>I'm a butto</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Mybutton />
    </div>
  );
}
