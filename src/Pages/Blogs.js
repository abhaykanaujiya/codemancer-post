import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, SEARCH_URL } from "../End_point/BaseUrl";
import FormNav from "./FormNav";
import "./Blogs.css";
export const Blogs = (props) => {
  const [post, setPost] = useState({
    url: "https://source.unsplash.com/300x300/?computer",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  });
  const [isOpen, setOpen] = useState(false);
  const [gifData, setGifData] = useState();
  const [search, setSearch] = useState("");
  const [selectedGif, setSelectedGif] = useState();

  console.log(selectedGif, "selected gif");
  function fetchData() {
    axios
      .get(BASE_URL)
      .then((res) => setGifData(res.data))
      .catch((err) => console.log(err, "something went wrong"));
  }
  console.log(gifData, "gifData");
  function getSearchData() {
    axios
      .get(SEARCH_URL, {
        params: {
          q: search,
          api_key: "dc6zaTOxFJmzC",
        },
      })
      .then((res) => setGifData(res.data))
      .catch((err) => console.log(err, "error"));
  }

  useEffect(() => {
    fetchData();
    {
      search ? getSearchData() : console.log("getsearch");
    }
  }, [search]);
  console.log(gifData, "gif -data");
  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <div
        style={{
          position: "fixed",
          backdropFilter: "brightness(.5)",
          height: "100%",
          width: "50%",
        }}
      >
        <FormNav
          gifData={gifData}
          setSearch={setSearch}
          isOpen={isOpen}
          setOpen={setOpen}
          selectedGif={selectedGif}
          setSelectedGif={setSelectedGif}
        />
      </div>
      <div
        class="card"
        style={{ paddingBottom: "10px", border: "1px solid grey" }}
      >
        <div>
          <div class="card__header">
            <p>{post.caption}</p>
            <img
              src={post.url}
              alt="card__image"
              class="card__image"
              style={{ minWidth: " -webkit-fill-available" }}
            />
          </div>
          <div class="card__body">
            <span class="tag tag-blue">
              <button style={{ borderStyle: "none" }}>Like</button>
              <button style={{ borderStyle: "none", marginLeft: "10px" }}>
                Comment
              </button>
              <button style={{ borderStyle: "none", marginLeft: "10px" }}>
                Share
              </button>
            </span>
          </div>
        </div>
        <div>
          <div class="card__header">
            <p>{post.caption}</p>
            <img
              src={post.url}
              alt="card__image"
              class="card__image"
              style={{ minWidth: " -webkit-fill-available" }}
            />
          </div>
          <div class="card__body">
            <span class="tag tag-blue">
              <button style={{ borderStyle: "none" }}>Like</button>
              <button style={{ borderStyle: "none", marginLeft: "10px" }}>
                Comment
              </button>
              <button style={{ borderStyle: "none", marginLeft: "10px" }}>
                Share
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
