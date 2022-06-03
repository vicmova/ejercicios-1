import React from "react";
import { useState, useEffect } from "react";

function LeerReddit() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function leerData() {
      const res = await fetch("https://www.reddit.com/r/reactjs.json");
      const json = await res.json();
      setPosts(json.data.children.map((c) => c.data));
    }

    leerData();
  }); // <-- we didn't pass a value. what do you think will happen?

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default function EjercicioDatos1() {
  return <LeerReddit />;
}
