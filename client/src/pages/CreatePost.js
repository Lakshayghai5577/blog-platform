import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [post, setPost] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/posts", post);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Post</h2>
      <input
        placeholder="Title"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        onChange={(e) => setPost({ ...post, content: e.target.value })}
      />
      <button>Create</button>
    </form>
  );
};

export default CreatePost;