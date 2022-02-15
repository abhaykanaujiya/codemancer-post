import React, { useState } from "react";
import pen from "../Icons/pencil.png";
import photo from "../Icons/photo-video.png";
import crossed from "../Icons/letter-x.png";
import "./Blogs.css";
import { Form } from "./Form";
export const FormNav = () => {
  const [open, setOpen] = useState(false);
  const handlePost = () => {
    console.log("hello");
    setOpen(true);
  };

  return (
    <div
      className="parent-nav"
      style={{
        border: " 1px solid lightgray",
        boxShadow: " 0px 0px 2px 3px  lightgrey",
margin: "10px",
        // marginTop: "10px",
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-between",
        background: " white",
        width: " 47vw",
      }}
    >
      <nav
        className="nav-body"
        style={{
          display: "flex",
          flexFlow: "row",
          backgroundColor: " #e9e9e9",
          justifyContent: "space-between",
          alignItems: " center",
          cursor: "context-menu",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "row",
            backgroundColor: " #e9e9e9",
          }}
        >
          <div className="btn-1" onClick={handlePost}>
            <img
              src={pen}
              alt="img"
              style={{ width: "15px", height: "13px" }}
            />
            Compose Post
          </div>
          <div>
            <hr></hr>
          </div>
          <div className="btn-2">
            <img
              src={photo}
              alt="img"
              style={{ width: "15px", height: "13px" }}
            />
            Photo/Video Album
          </div>
          <div>
            <hr></hr>
          </div>
          <div className="btn-3">
            <img
              src={pen}
              alt="img"
              style={{ width: "15px", height: "13px" }}
            />
            live
          </div>
        </div>

        <div className="button-4-body">
          <div className="btn-4">
            <img
              src={crossed}
              alt="img"
              style={{
                width: "15px",
                height: "15px",
                display: "flex",
                alignItems: "end",
              }}
            />
          </div>
        </div>
      </nav>
      {open ? <Form /> : null}
      <div className="footer">
        <select className="select">
          <oprtion></oprtion>
          <option>only me</option>
          <option>friends</option>
        </select>
        <button className="button">Post</button>
      </div>
    </div>
  );
};
