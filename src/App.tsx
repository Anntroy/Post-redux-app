import { useEffect, useState } from 'react';
import './App.css';
import PostCard from './components/PostCard';
import { v4 as uuidv4 } from 'uuid';
import { Post } from './interfaces';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id: number) => {
    const filteredPosts = posts?.filter((post) => post.id !== id);
    console.log('filteredPosts', filteredPosts);
    setPosts(filteredPosts);
  };

  console.log('posts', posts);
  return (
    <div className='main'>
      {posts?.map((post) => (
        <PostCard userId={post.userId} key={uuidv4()} title={post.title} body={post.body} id={post.id} deletePost={handleDelete} />
      ))}
    </div>
    // <div className='main'>
    //   {error ? (
    //     <>Oh no, there was an error</>
    //   ) : isLoading ? (
    //     <>Loading...</>
    //   ) : data ? (
    //     <>
    //       {data.map((post) => (
    //         <PostCard userId={post.userId} key={uuidv4()} title={post.title} body={post.body} id={post.id} deletePost={handleDelete} />
    //       ))}
    //     </>
    //   ) : null}
    // </div>
  );
};

export default App;
