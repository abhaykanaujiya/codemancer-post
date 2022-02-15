import React, { useState } from 'react'
import {FormNav} from './FormNav';
import "./Blogs.css"
export const Blogs = (props) => {
  const [post, setPost] = useState(
    {
      url: "https://source.unsplash.com/300x300/?computer",
      caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  );

  return (
    <div className="container" style={{ overflow: "auto" }}>
      <div
        class="card"
        style={{ paddingBottom: "10px", border: "1px solid grey" }}
      >
        <div style={{position:"fixed"}}>
          <FormNav />
        </div>
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
          <div>
            <hr style={{border:"1px solid black"}}></hr>
          </div>
 </div>

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
  );
}
