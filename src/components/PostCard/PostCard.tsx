import { useState } from 'react';
import './PostCard.css';

export interface PostCardProps {
  userId: number;
  id: number;
  title: string;
  body?: string;
  deletePost: (id: number) => void;
}

export default function PostCard(props: PostCardProps) {
  const { userId, title, body, id, deletePost } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className='card' data-testid='post'>
      <article className='card__container'>
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
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className='card__button'>
              &#x22ee;
            </button>
            {dropdownOpen && (
              <div className='card__dropdown'>
                <button onClick={() => deletePost(id)}>Delete</button>
              </div>
            )}
          </div>
        </div>
      </article>
    </section>
  );
}
