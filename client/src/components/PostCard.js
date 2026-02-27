// client/src/components/PostCard.js

import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{post.title}</h3>
      <p>By: {post.author?.username}</p>
      <Link to={`/post/${post._id}`}>Read More</Link>
    </div>
  );
};

export default PostCard;