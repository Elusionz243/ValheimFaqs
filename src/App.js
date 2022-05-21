import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import ToDoList from "./components/todolist/ToDoList";
import Monsters from "./components/monsters/Monsters";
import Animals from "./components/animals/Animals";
import FoodAndFarming from "./components/foodAndFarming/FoodAndFarming";
import Items from "./components/items/Items";
import AllItems from "./components/items/AllItems";
import NotFound from "./errors/NotFound";

import items from "./utils/valheimItems.json";

function App() {
  const navbarLinks = [
    "Home",
    "To-Do List",
    "Monsters",
    "Animals",
    "Food & Farming",
    "Items",
  ];

  return (
    <div className="container">
      <Navbar links={navbarLinks} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/To-Do%20List" element={<ToDoList />} />
        <Route path="/Monsters" element={<Monsters />} />
        <Route path="/Animals" element={<Animals />} />
        <Route path="/Food%20&%20Farming" element={<FoodAndFarming />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/Items/All-Items" element={<AllItems items={items} />} />
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
