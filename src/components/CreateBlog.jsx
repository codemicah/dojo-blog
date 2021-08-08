import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Author...");

  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Loading...");

    const blog = { title, body, author };

    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        setMessage("Blog Added");
        history.push("/");
      });
    }, 1000);
  };

  return (
    <div className="create-blog">
      <h2>Create A New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          name="body"
          required
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author</label>
        <select required onChange={(e) => setAuthor(e.target.value)}>
          <option selected disabled>
            Author
          </option>
          <option value="mario">Mario</option>
          <option value="yushi">Yushi</option>
        </select>
        {message}
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
