import React from "react";
import user from "../Icons/user.png";
import "./Gif.css";
import { ColorBlocks } from "./ColorBlocks";
import less from "../Icons/less.png"
import "./CSS/Form.css"
const Form = (props) => {
  console.log(props.selectedGif, "selected gif");
  const handleGifClick = () => {
    props.setOpen(true);
  };

  return (
    <div
      className="form-body"
     
    >
      <div
        className="form-container"
      >
        <img
          className="user-img"
          src={user}
        />
        <input
          className="input-field"
          type="text"
          placeholder="write something"
        ></input>
      </div>

      {props.selectedGif ? (
        <div
          className="selected-gif-container"
        >
          <img
            className="selected-img"
            src={props.selectedGif}
            alt="img"
            
          />
        </div>
      ) : null}

      <div
        className="color-block-body "
   
      >
        <div className="cb-icon-body"
          
        >
          <img
            className="cb-icon"
            
            src={less}
            alt="img"
          ></img>
        </div>
        
        <div className="color-blocks">
          <ColorBlocks />
        </div>
      </div>

      <div
        className="Tags-body"
    
      >
        <div className="tags-container"
        >
          <div
            className="tags"
   
          >
            Tag Friends
          </div>

          <div
            className="tags"

          >
            Chek in
          </div>
        </div>

        <div
          style={{ display: "flex", flexFlow: "row" }}
        >
          <div
            className="tags"
            onClick={handleGifClick}
         
          >
            Gif
          </div>

          <div
            className="tags"
           
          >
            Tag Event
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Form;
