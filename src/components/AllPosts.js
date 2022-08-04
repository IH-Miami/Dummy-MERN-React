import React from "react";
import { get } from "../services/service";
import { useParams, Link } from "react-router-dom";

const AllPosts = () => {
  const [posts, setPosts] = React.useState([]);
  const [status, setStatus] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      let response = await get("/posts/all");
      setPosts(response.data);
      setLoading(false);
    } catch (err) {
      setStatus(err.message);
    }
  };

  return (
    <div>
      <h2>All Posts</h2>
      <h3>{status}</h3>
      {posts.map((post) => {
        return (
          <div>
            <h3>{post.content}</h3>
            <p>
              Created by:{" "}
              <Link to={`/users/${post.creatorId._id}`}>
                {post.creatorId.username}
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AllPosts;
