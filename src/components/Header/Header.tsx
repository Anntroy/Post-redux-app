export interface HeaderProps {
  postCount: number;
}

export const Header = (props: HeaderProps) => {
  const { postCount } = props;

  return (
    <header className='header'>
      <h1>Blog for everyone</h1>
      <h4>Total Posts: {postCount}</h4>
    </header>
  );
};
