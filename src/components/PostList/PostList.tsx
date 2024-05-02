import { Post } from '../../interfaces';
import PostCard from '../PostCard/PostCard';
import { v4 as uuidv4 } from 'uuid';
import './PostList.css';

interface PostListProps {
  postsList: Post[];
  handleDelete: (id: number) => void;
}

export default function PostList(props: PostListProps) {
  const { postsList, handleDelete } = props;

  return (
    <div className='main'>
      {postsList?.map(({ id, userId, title, body }) => (
        <PostCard userId={userId} key={uuidv4()} title={title} body={body} id={id} deletePost={handleDelete} />
      ))}
    </div>
  );
}
