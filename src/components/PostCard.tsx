import { useState } from 'react';
import './PostCard.css';

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  deletePost: (id: number) => void;
}

export default function PostCard(props: PostProps) {
  const { userId, title, body, id, deletePost } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <section className='card-wrap'>
      <article className='card'>
        <div className='card__category'>
          <h3>{title}</h3>
        </div>
        <div className='card__text'>
          <p>{body}</p>
        </div>
        <div className='card__profile'>
          <div className='card__user'>
            <span>User {userId}</span>
          </div>
          <div className='card__options' onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button onClick={toggleDropdown} className='card__options-button'>
              &#x22ee;
            </button>
            {dropdownOpen && (
              <div className='card__dropdown'>
                <button onClick={() => deletePost(id)}>Delete</button>
                <button onClick={() => deletePost(id)}>Update</button>
              </div>
            )}
          </div>
        </div>
      </article>
    </section>
  );
}
