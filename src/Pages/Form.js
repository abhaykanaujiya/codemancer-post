
import React, {  useState } from "react";
import { Gif } from "./GifSearch";

export const Form = (props) => {
  const [isopen, setIsOpen] = useState(false);



  const handleGifClick = () => {
    setIsOpen(!isopen);
  };

  return (
    <div className="form-body" style={{paddingBottom:"168px"}}>
      <input
        className="input-field"
        type="text"
        placeholder="write something"
        style={{ height: "78px", width: " 49vw" }}
      ></input>
      <div>
        <button style={{width:"20px",height:"20px",backgroundColor:"gray"}}>  </button>
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
        <div
          style={{
            border: "1px solid",
            width: "26vw",
            textAlign: "center",
            marginTop: "10px",
            borderRadius: "1rem",
          }}
        >
          Tag Friends
        </div>
        <div
          style={{
            border: "1px solid",
            width: "26vw",
            textAlign: "center",
            marginTop: "10px",
            borderRadius: "1rem",
          }}
        >
          Chek in
        </div>
        <div
          onClick={handleGifClick}
          style={{
            border: "1px solid",
            width: "26vw",
            marginTop: "10px",
            textAlign: "center",
            borderRadius: "1rem",
          }}
        >
          Gif
        </div>
        <div>{ isopen?<Gif />:null}</div>
        <div
          style={{
            border: "1px solid",
            width: "26vw",
            marginTop: "10px",
            textAlign: "center",
            borderRadius: "1rem",
          }}
        >
          Tag Event
        </div>
      </div>
    </div>
  );
};
