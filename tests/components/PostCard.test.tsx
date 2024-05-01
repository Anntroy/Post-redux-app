import React from 'react';
import { it, expect, describe } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostCard from '../../src/components/PostCard/PostCard';

render;
describe('PostCard', () => {
  const renderContent = () => {
    render(
      <PostCard
        title='Title'
        id={1}
        userId={2}
        deletePost={function (id: number): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    return {
      heading: screen.getByRole('heading'),
      optionsButton: screen.getByRole('button', { name: '\u22ee' }),
    };
  };

  it('should render a post card with title when title is provided', () => {
    const { heading } = renderContent();
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Title');
  });
  it('should render delete button when option button is clicked', async () => {
    const { optionsButton } = renderContent();
    screen.debug();
    const user = userEvent.setup();
    await waitFor(() => {
      user.click(optionsButton);
      const deleteButton = screen.getByRole('button', { name: 'Delete' });
      expect(deleteButton).toBeInTheDocument();
    });
  });
});
