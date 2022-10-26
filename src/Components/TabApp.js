import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Todolist from "./Todolist";
export default function TabApp() {
  const [value, setValue] = useState("home");
  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab value="home" label="Home" />
        <Tab value="todolist" label="Todos" />
      </Tabs>
      {value === "home" && (
        <div>
          <h1>Welcome to your To Do-application</h1>
        </div>
      )}{" "}
      {value === "todolist" && (
        <div>
          <Todolist />
        </div>
      )}
    </div>
  );
}
