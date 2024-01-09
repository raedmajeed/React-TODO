import React from "react";
import ReactDOM from "react-dom/client";
import TodoWrapper from "./components/TodoWrapper";


const AppLayout = () => {
  return (
    <div>
      <TodoWrapper />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);