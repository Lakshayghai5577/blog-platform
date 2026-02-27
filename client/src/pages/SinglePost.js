import { useEffect, useState } from "react";
import API from "../api/axios";
import { useParams, Link } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    API.get(`/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author?.username}</p>

      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  );
};

export default SinglePost;