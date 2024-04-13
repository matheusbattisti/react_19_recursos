import React, { useState, useEffect, Suspense } from "react";

// Componente que busca os posts
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data.slice(0, 3); // Retorna apenas os 3 primeiros posts
};

// Componente PostItems que usa o hook useEffect para carregar os dados
const PostItems = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const postData = await fetchPosts();
      setPosts(postData);
    };
    loadData();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <div key={post.id} className="bg-blue-50 shadow-md p-4 my-6 rounded-lg">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </ul>
  );
};

// Componente Posts que usa Suspense para lidar com o carregamento dos posts
const Posts = () => {
  return (
    <Suspense
      fallback={
        <h1 className="text-2xl text-center font-bold mt-5">Carregando...</h1>
      }
    >
      <PostItems />
    </Suspense>
  );
};

export default Posts;
