import './App.css';
import PostCard from './components/PostCard';
import { useGetAllPostsQuery } from './services/posts';
import { v4 as uuidv4 } from 'uuid';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App: React.FC = () => {
  const { isLoading, data, error } = useGetAllPostsQuery();

  const handleDelete = (id: number) => {
    const filteredPosts = data?.filter((post, postId) => postId !== id);
    console.log('filteredPosts', filteredPosts);
  };

  console.log('data', data);
  return (
    <div className='main'>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.map((post) => (
            <PostCard userId={post.userId} key={uuidv4()} title={post.title} body={post.body} id={post.id} deletePost={handleDelete} />
          ))}
        </>
      ) : null}
    </div>
  );
};

export default App;
