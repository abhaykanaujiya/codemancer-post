import React, { useState, useEffect } from "react";

export const Gif = (props) => {

  const handleSelect = (image) => {
    props.setSelectedGif(image);
    // console.log(image, "image")
    
    props.setOpen(false)
}
  console.log(props.gifData,"gif data");
  const handleChange = (e) => {
    props.setSearch(e.target.value)
  };

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
      {props.gifData?.data?.map((v, index) => (
        <div
          className="gif-list"
          style={{
            border: "1px solid lightgrey",
            margin: "5px",
            height: "130px",
          }}
        >
          <div style={{ width: "24vw", height: "13vw" }} onClick={()=>handleSelect(v.images.fixed_height.url)}>
            <img
              src={v.images.fixed_height.url}
              style={{ width: "22vw", height: "15vw", paddingBottom: "10px" }}
              alt="alt"
              
            />
          </div>
        </div>
      ))}
    </div>
  );
};
