import './header.scss';
import SocialBotLogo from '@/assets/images/socialbot.webp'

export const HeaderNavigation = () => {
  const navbar = [
    {id: 1, label: 'О нас', path: '/'},
    {id: 2, label: 'Функционал', path: '/'},
    {id: 3, label: 'Мануал по использованию', path: '/'},
    {id: 4, label: 'Прайсинг', path: '/'},
  ];

  return (
    <>
      <header className='header'>
        <a
          className='header__logo'
          href="/"
        >
          <img
            src={SocialBotLogo}
            alt="logo"
          />
        </a>
        <nav className='header__nav'>
          {navbar.map((item) => (
            <button
              className="button"
              key={item.id}
            >
              <a href={item.path}>{item.label}</a>
            </button>
          ))}
          <div className='header__autorize'>
            <button className='button'>Вход</button>
            <button className='button'>Регистрация</button>
          </div>
        </nav>
      </header>
    </>
  );
};