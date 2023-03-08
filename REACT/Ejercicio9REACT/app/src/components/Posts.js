import { useEffect, useState } from "react";
import axios from "axios";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPost, setLoadingPost] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoadingPost(true);
    const newPost = { title, body, userId };
    const result = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );
    setPosts([result.data, ...posts]);
    setTitle("");
    setBody("");
    setUserId("");
    setLoadingPost(false);
  };

  return (
    <div>
      <h1>Listado de posts</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
        />
        <button type="submit">Submit</button>
      </form>
      {loading && loadingPost ? (
        <img src="../../oval.svg" width="50" alt="loader" />
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};
