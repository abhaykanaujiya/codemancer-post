import React, {  useState } from "react";
import { Gif } from "./GifSearch";
import user  from "../Icons/user.png";
export const Form = (props) => {
  const [isopen, setIsOpen] = useState(false);



  const handleGifClick = () => {
    setIsOpen(!isopen);
  };

  return (
    <div
      className="form-body"
      style={{
          width:" 46 vw",
        border: "2px solid",
        backgroundColor: "whitesmoke",
        display: "flex",
        flexFlow: "column",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop:"10px"
      }}
    >
      <div style={{display:"flex",flexFlow:"row"}}>
        <img src={user} style={{ width: "90px", height: "80px" }} />
        <input
          className="input-field"
          type="text"
          placeholder="write something"
          style={{ height: "78px", width: " 47.2vw" }}
        ></input>
      </div>

      <div>
        <button
          style={{ width: "20px", height: "20px", backgroundColor: "gray" }}
        ></button>
      </div>
      <div
        className="Tags"
        style={{
          display: "flex",
          flexFlow: "wrap",
          justifyContent: "center",
          justifyContent: "space-around",
          padding: "10px",
        }}
      >
        <div style={{ display: "flex", flexFlow: "row" }}>
          <div
            style={{
              border: "1px solid",
              width: "22vw",
              textAlign: "center",
              marginTop: "10px",
              borderRadius: "1rem",
              background: " #e9e9e9",
            }}
          >
            Tag Friends
          </div>

          <div
            style={{
              border: "1px solid",
              width: "22vw",
              textAlign: "center",
              marginTop: "10px",
              borderRadius: "1rem",
              background: " #e9e9e9",
            }}
          >
            Chek in
          </div>
        </div>

        <div style={{ display: "flex", flexFlow: "row" }}>
          <div
            onClick={handleGifClick}
            style={{
              border: "1px solid",
              width: "22vw",
              marginTop: "10px",
              textAlign: "center",
              borderRadius: "1rem",
              background: " #e9e9e9",
            }}
          >
            Gif
          </div>
          <div>{isopen ? <Gif /> : null}</div>
          <div
            style={{
              border: "1px solid",
              width: "22vw",
              marginTop: "10px",
              textAlign: "center",
              borderRadius: "1rem",
              background: " #e9e9e9",
            }}
          >
            Tag Event
          </div>
        </div>
      </div>
    </div>
  );
};
