import React from "react";
import user from "../Icons/user.png";
import "./Gif.css";
import { ColorBlocks } from "./ColorBlocks";

const Form = (props) => {

  console.log(props.selectedGif,"selected gif");
  const handleGifClick = () => {
    // props.handleGif();
    props.setOpen(true);
  };

  return (
    <div
      className="form-body"
      style={{
        width: " 46 vw",
        border: "2px solid",
        backgroundColor: "whitesmoke",
        display: "flex",
        flexFlow: "column",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "10px",
      }}
    >
      <div style={{ display: "flex", flexFlow: "row" }}>
        <img src={user} style={{ width: "90px", height: "80px" }} />
        <input
          className="input-field"
          type="text"
          placeholder="write something"
          style={{ height: "78px", width: " 47.2vw" }}
        ></input>
      </div>

      {}
      <div style={{width:"200px",height:"200px"}}>
        <img src={props.selectedGif} />
      </div>


      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "space-around",
        }}
      >
        <button
          style={{ width: "20px", height: "20px", backgroundColor: "gray" }}
        ></button>
        <div>
          <ColorBlocks />
        </div>
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
            className="hover"
            style={{
              border: "1px solid lightgrey",
              width: "22vw",
              textAlign: "center",
              marginTop: "10px",
              borderRadius: "1rem",
              marginRight: "10px",
              // background: " #e9e9e9",
            }}
          >
            Tag Friends
          </div>

          <div
            className="hover"
            style={{
              border: "1px solid lightgrey",
              width: "22vw",
              textAlign: "center",
              marginTop: "10px",
              borderRadius: "1rem",

              // background: " #e9e9e9",
            }}
          >
            Chek in
          </div>
        </div>

        <div style={{ display: "flex", flexFlow: "row" }}>
          <div
            className="hover"
            onClick={handleGifClick}
            style={{
              border: "1px solid lightgrey",
              width: "22vw",
              marginTop: "10px",
              textAlign: "center",
              borderRadius: "1rem",
              marginRight: "10px",
              // backgroundColor:"white"
            }}
          >
            Gif
          </div>

          <div
            className="hover"
            style={{
              border: "1px solid lightgrey",

              width: "22vw",
              marginTop: "10px",
              textAlign: "center",
              borderRadius: "1rem",
              // background: " #e9e9e9",
            }}
          >
            Tag Event
          </div>
        </div>
      </div>
      {/* <div className="gif">{isopen ? <Gif /> : null}</div> */}
    </div>
  );
};

// const mapStateToProps = ({BlogRducers}) => {
//   const { gifyData, searchData, selectedData, searchText, isOpen } = BlogRducers;
//   return {
//     gifyData,
//     searchData,
//     selectedData,
//     searchText,
//     isOpen,
//   };
// }
export default Form;
