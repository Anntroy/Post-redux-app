import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppDispatch } from './store';
import { fetchPosts, deletePostById } from './store/posts/slice';
import PostList from './components/PostList/PostList';
import './App.css';

const App: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const postsList = useSelector((state: RootState) => state.posts.posts);
  const loading = useSelector((state: RootState) => state.posts.loading);
  const error = useSelector((state: RootState) => state.posts.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    dispatch(deletePostById(id));
  };

  return (
    <>
      {error ? <>Something went wrong! Error: {error}</> : null}
      {loading ? <>Loading...</> : null}
      {postsList ? <PostList postsList={postsList} handleDelete={handleDelete} /> : null}
    </>
  );
};

export default App;
