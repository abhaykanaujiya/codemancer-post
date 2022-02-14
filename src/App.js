import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./End_point/BaseUrl";
import { Blogs } from "./Pages/Blogs";
import "./App.css"
function App() {
  // const [data, setData]=useState([])
 

  return (
    <div className="App">
  <Blogs  />
    
    </div>
  );
}

export default App;
