import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppDispatch } from './store';
import { fetchPosts, deletePostById } from './store/posts/slice';
import PostList from './components/PostList/PostList';
import { Header } from '../src/components/Header/Header';

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

  if (loading)
    return (
      <div>
        <h5>Loading...</h5>
      </div>
    );
  if (error)
    return (
      <div>
        <h5>Something went wrong! Error: {error}</h5>
      </div>
    );

  return (
    <>
      <Header postCount={postsList.length} />
      {postsList ? <PostList postsList={postsList} handleDelete={handleDelete} /> : null}
    </>
  );
};

export default App;
