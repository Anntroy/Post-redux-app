import { useState } from 'react';
import './PostCard.css';
import { useDeletePostMutation } from '../services/posts';

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  deletePost: (id: number) => void;
}

export default function PostCard(props: PostProps) {
  const { userId, title, body, id, deletePost } = props;
  // const [deletePost] = useDeletePostMutation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <section className='card-wrap'>
      <article className='card'>
        <div className='categoria-card'>
          <h3>{title}</h3>
        </div>
        <div className='texto-card'>
          <p>{body}</p>
        </div>
        <div className='perfil-card'>
          <div className='avatar'>
            <img src='https://via.placeholder.com/50' alt='User avatar' className='round-image' />
            <span>User {userId}</span>
          </div>
          <div className='options' onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button onClick={toggleDropdown} className='options-button'>
              &#x22ee;
            </button>
            {dropdownOpen && (
              <div className='dropdown'>
                <button onClick={() => deletePost(id)}>Delete</button>
              </div>
            )}
          </div>
        </div>
      </article>
    </section>
  );
}
