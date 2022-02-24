import React, { useState, useEffect } from "react";

export const Gif = (props) => {
  const handleSelect = (image) => {
    props.setSelectedGif(image);
    props.setOpen(false);
  };
  console.log(props.gifData, "gif data");
  const handleChange = (e) => {
    props.setSearch(e.target.value);
  };

  return (
    <div className="gif-body">
      <input
        className="search-gif"
        type="text"
        placeholder="Search Gif"
        onChange={(e) => handleChange(e)}
      ></input>
      {props.gifData?.data?.map((v, index) => (
        <div className="gif-list">
          <div
            className="gif-list-child"
            onClick={() => handleSelect(v.images.fixed_height.url)}
          >
            <img
              className="list-images"
              src={v.images.fixed_height.url}
              alt="alt"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
