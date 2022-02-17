import React, { useState, useEffect } from "react";
import { BASE_URL } from "../End_point/BaseUrl";
import { SEARCH_URL } from "../End_point/BaseUrl";
import axios from "axios";
export const Gif = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  function fetchData() {
    axios
      .get(BASE_URL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "something went wrong"));
  }
  function getSearchData() {
    axios
      .get(SEARCH_URL, {
        params: {
          q: search,
          api_key: "dc6zaTOxFJmzC",
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "error"));
  }
  const handleGifClick = (e,index) => {
    console.log(e.target,index,"hello");
  }
  const handleChange = (e) => {
    console.log(e.target.value, "input");
    setSearch(e.target.value);
    getSearchData();
  };
  useEffect(() => {
    fetchData();
  }, [search]);
  console.log(data, "data");
  return (
    <div
      className="gif-body"
      style={{
        border: "1px solid grey",
        borderRadius: ".4rem",
        boxShadow: "0px 0px 2px 1px grey",
        width: "22vw",
        height: "13vw",
        backgroundColor: "white",
        overflow: "auto",
        overflowX: "hidden",
        scrollbarWidth: "none",
      }}
    >
      <input
        className="search-gif"
        type="text"
        placeholder="Search Gif"
        onChange={(e) => handleChange(e)}
        style={{
          border: "none",
          width: "20vw",
          height: "2vw",
          marginTop: "5px",
          marginLeft: "6px",
          boxShadow: "0px 0px 2px 1px grey",
        }}
      ></input>
      {data?.data?.map((v, index) => (
        <div
          className="gif-list"
          style={{
            border: "1px solid lightgrey",
            margin: "5px",
            height: "130px",
          }}
        >
          <div style={{ width: "24vw", height: "13vw" }}>
            <img
              src={v.images.fixed_height.url}
              style={{ width: "22vw", height: "15vw", paddingBottom: "10px" }}
              alt="alt"
              onClick={ (e)=>handleGifClick( e,index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
