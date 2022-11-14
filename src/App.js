import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";


function App() {
  const list = useSelector(state => state.task.taskList)
  useEffect(() => {
    // console.log(list)
  }, [list])
  return (
    <div className="p-20 bg-slate-500">
      <Header />
      <Home />
    </div>
  );
}

export default App;
