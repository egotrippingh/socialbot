import './Header.scss'
import {Link} from "react-router-dom";

const Header = () => {

  const navItems = [
    {id:1, label:'Главная', path: '/'},
    {id:2, label:'О сервисе', path: '/about'},
    {id:3, label:'Гайд', path: '/guide'},
    {id:4, label:'Поддержка', path: '/support'},
    {id:5, label:'Прайсинг', path: '/pricing'}
  ];

  return (
    <header className='header'>
      <div className="header__inner container">
        <img className='header__logo'
             src="@/assets/images/socialbot.webp"
             alt="logo"
        />
        {navItems.map(item => (
          <nav>
            <li key={item.id}>
              <a href={item.path}>
                {item.label}
              </a>
            </li>
          </nav>
        ))}
      </div>
    </header>
  )
}

export default Header