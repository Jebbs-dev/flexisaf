import { useState, useEffect } from "react";
import {
  getPosts,
  createPost,
  updatePost,
  patchPost,
  deletePost,
} from "./api/post-api";

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Create a new post
  const handleCreatePost = async () => {
    const newPost = {
      title: "New Post",
      body: "lorem ipsum dolor sit amet, consectetur adip",
      userId: 1,
    };

    try {
      const createdPost = await createPost(newPost);
      setPosts((prevPosts) => [createdPost, ...prevPosts]);
    } catch (error) {
      console.error("Error creating the post:", error);
    }
  };

  // Update a post
  const handleUpdatePost = async (id) => {
    const updatedPost = {
      title: "Updated Post",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odit repellat quae in, possimus quaerat neque, dolorem officia mollitia nihil illo sunt ea molestias aperiam qui tempora itaque cumque eligendi!",
      userId: 1,
    };

    try {
      const updatedPostResponse = await updatePost(id, updatedPost);
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === id ? updatedPostResponse : post))
      );
    } catch (error) {
      console.error("Error updating the post:", error);
    }
  };

  // Partially update (patch) a post
  const handlePatchPost = async (id) => {
    const partialUpdate = {
      title: "New Title",
    };

    try {
      const patchedPost = await patchPost(id, partialUpdate);
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === id ? patchedPost : post))
      );
    } catch (error) {
      console.error("Error patching the post:", error);
    }
  };

  // Delete a post
  const handleDeletePost = async (id) => {
    try {
      const success = await deletePost(id);
      if (success) {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      } else {
        console.error("Failed to delete the post");
      }
    } catch (error) {
      console.error("Error deleting the post:", error);
    }
  };

  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Posts
      </h1>

      <div className="text-center mb-8">
        <button
          onClick={handleCreatePost}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 transition-colors"
        >
          Create New Post
        </button>
      </div>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-6 bg-white shadow-lg rounded-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-700">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-6">{post.body}</p>

            <div className="flex space-x-4">
              <button
                onClick={() => handleUpdatePost(post.id)}
                className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-600 transition-colors"
              >
                Update
              </button>
              <button
                onClick={() => handlePatchPost(post.id)}
                className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-yellow-600 transition-colors"
              >
                Patch
              </button>
              <button
                onClick={() => handleDeletePost(post.id)}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
