import './headerComp.scss';

export const HeaderNavigation = () => {
  const navbar = [
    { id: 1, label: 'имя1', path: '/' },
    { id: 2, label: 'имя2', path: '/' },
    { id: 3, label: 'имя3', path: '/' },
    { id: 4, label: 'имя4', path: '/' },
  ];

  return (
    <>
      <nav>
        <button><a href="/image">logo</a></button>
        {navbar.map((item) => (
          <button className="button" key={item.id}>
            <a href={item.path}>{item.label}</a>
          </button>
        ))}
      </nav>
      <div>
        <button></button>
        <button></button>
        </div>
    </>
  );
};