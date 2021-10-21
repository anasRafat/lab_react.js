import { useState } from "react";
import { ViewPosts } from "./components/ViewPosts";
import { AddPost } from "./components/AddPost";

export const App = () => {
  const [posts, setPosts] = useState([]);

  

  const handleDelete = () => {
    setPosts([]);
  };
  const oneDelete =() =>{
    setPosts([...posts]);
  };

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <dl>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <AddPost addPost={addPost} />
        </div>
        <div className="col-6">
          <ViewPosts
            posts={posts}
            onDelete={handleDelete}
            oneDelete={oneDelete}
          />
        </div>
      </div>
    </div>
    </dl>
  );
};
