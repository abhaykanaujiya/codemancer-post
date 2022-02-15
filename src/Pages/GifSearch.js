import React, { useState, useEffect } from "react";
import { BASE_URL } from "../End_point/BaseUrl";
import axios from "axios";
export const Gif = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  function fetch() {
    return axios
      .get(BASE_URL, {
        params: {
          q: search,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "something went wrong"))
  }
  const handleChange = (e) => {
    console.log(e.target.value, "input");
    setSearch(e.target.value);
  };
  useEffect(() => {
    fetch();
  }, []);
  console.log(data, "data");
  return (
    <div
      className="gif-body"
      style={{
        border: "2px solid",
        width: "26vw",
        height: "13vw",
        backgroundColor: "blue",
      }}
    >
      <input
        className="search-gif"
        type="text"
        placeholder="Search Gif"
        onChange={(e) => handleChange(e)}
      ></input>
      {/* {data?.map((v, index) => ( */}
      <div>
        <li>
          {" "}
          <img src={""} alt="alt" />
        </li>
      </div>
      {/* ))} */}
    </div>
  );
};
