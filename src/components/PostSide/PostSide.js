import React, { useState } from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./PostSide.css";
const PostSide = () => {
  const [reset, setReset] = useState(1);

  return (
    <div className="PostSide">
      <PostShare setReset={setReset} />
      <Posts key={reset} />
    </div>
  );
};

export default PostSide;
