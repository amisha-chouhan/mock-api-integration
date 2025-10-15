import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  // const [resposnseData, setResposnseData] = useState(null);

  // url="";

  useEffect(() => {
    const fun = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("error");
        const data = await res.json();
        setPosts(data); //posts state ko sirf data se replace kar dega.
        // console.log(data.json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fun();
  }, []);

  //POST

  const handlePost = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        //yha url means endpoint jha post request bhejna hain
        method: "POST",
        body: JSON.stringify({ title: "foo", body: "lorem*3", userid: 1 }),
        headers: { "Content-type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed to add post");

      const newPost = await res.json();
      setPosts([newPost, ...posts]);
      //tum new post ko existing posts ke saath combine kar rahe ho.
    } catch (err) {
      setError(err.message);
    }
  };

  //PUT

  const updatePost = async () => {
    try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/$`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: "Updated title",
        body: "Updated body content",
        userId: 1,
      }),
    });

    if (!res.ok) throw new Error("Failed to update post");
    const updatedPost = await res.json();

    // 🧩 Update local state
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? updatedPost : post
      )
    );

    console.log("Updated successfully:", updatedPost);
  } catch (err) {
    setError(err.message);
  }
};


  if (loading) return <h3> loading...</h3>;
  if (error) return <h3> error {error}</h3>;

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2> All post </h2>
        {/* <input 
    type="text" 
    value={title} 
    placeholder=" enter title"
    onChange={(e)=> setTitle(e.target.value)} 
    /> */}
        <button style={{ color: "red" }} onClick={handlePost}>
          Add Post
        </button>

        <div>
          <h2> Update Post Request</h2>
          <button onClick={updatePost}>update post</button>
        </div>

        <h1>Posts Data</h1>

        {posts.slice(0, 5).map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid gray",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;