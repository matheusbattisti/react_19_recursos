import { use } from "react";

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};
  
const PostItems = () => {
  const posts = use(fetchPosts());

  return (
    <ul>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </ul>
  );
}; 

export default PostItems;