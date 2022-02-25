import React from "react";
import pen from "../Icons/pencil.png";
import photo from "../Icons/photo-video.png";
import crossed from "../Icons/letter-x.png";
import lock from "../Icons/locks.png";
import Form from "./Form";
import { Gif } from "./GifSearch";
import { VerticalLine } from "./VerticalLine";
import "./VerticalLine.css";
import "./FormNav.css";
const FormNav = (props) => {
  const handlePost = () => {
    console.log("hello");
    // setOpen(true);
  };
  console.log(props, "props");
  return (
    <div className="parent-nav">
      <nav className="nav-body">
        <div className="top">
          <div className="btn-1" onClick={handlePost}>
            <img className="btn1-img" src={pen} alt="img" />
            Compose Post
          </div>
          <div className="line-body">
            <VerticalLine />
          </div>
          <div className="btn-2">
            <img
              src={photo}
              alt="img"
              style={{ width: "15px", height: "13px" }}
            />
            Photo/Video Album
          </div>
          <div className="line-body">
            <VerticalLine />
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

      <Form setOpen={props.setOpen} selectedGif={props.selectedGif} />
      <div className="footer">
        <div className="footer-gif-section">
          {props.isOpen ? (
            <Gif
              gifData={props.gifData}
              setSearch={props.setSearch}
              setOpen={props.setOpen}
              setSelectedGif={props.setSelectedGif}
            />
          ) : null}
        </div>

        <div className="footer-elements">
          <div className="drop-down">
            <img
              src={lock}
              alt="img"
              style={{ width: "10px", marginRight: "-10px" }}
            />
            <select
              className="select"
              style={{ background: "aliceblue", border: " none" }}
            >
              <oprtion></oprtion>
              <option>only me</option>
              <option>friends</option>
            </select>
          </div>

          <div>
            <button className="button">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormNav;
