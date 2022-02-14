import React, { useState, useEffect } from "react";
import { BASE_URL } from "../End_point/BaseUrl";
import axios from "axios";
export const Gif = () => {
  const [data, setData] = useState([]);
  function fetch() {
   axios
     .get(BASE_URL)
     .then((res) => setData(res.data))
     .catch((err) => console.log(err, "something went wrong"));
}
  useEffect(() => {
    fetch();
  }, []);
  console.log(data,"data");
  return (
    <div
      className="gif-body"
      style={{
        border: "2px solid",
        width: "300px",
        height: "400px",
        backgroundColor: "blue",
      }}
    >
      <input
        className="search-gif"
        type="text"
        placeholder="Search Gif"
      ></input>
      {data?.map((v, index) => (
        <div>
          <li>
            {" "}
            <img src={v.url} alt="alt" />
          </li>
        </div>
      ))}
    </div>
  );
};
