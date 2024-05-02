import React from 'react';
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import PostList from '../../src/components/PostList/PostList';

describe('PostList', () => {
  const renderContent = () => {
    const postsList = [
      { id: 1, userId: 1, title: 'Post 1', body: 'Body 1' },
      { id: 2, userId: 2, title: 'Post 2', body: 'Body 2' },
    ];
    render(
      <PostList
        postsList={postsList}
        handleDelete={function (id: number): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    return {
      postsList: postsList,
    };
  };

  it('should render the correct number of PostCard components', () => {
    const { postsList } = renderContent();
    const postCards = screen.getAllByTestId('post');
    expect(postCards).toHaveLength(postsList.length);
  });
});
