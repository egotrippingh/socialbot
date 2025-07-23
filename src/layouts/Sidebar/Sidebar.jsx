import './Sidebar.scss'
import Logo from "@/components/Logo/index.js";
import {Link, useLocation} from 'react-router-dom'

const Sidebar = () => {

  const {pathname} = useLocation()

  const navItems = [
    {id: 1, label: 'Главная', path: '/'},
    {id: 2, label: 'О сервисе', path: '/about'},
    {id: 3, label: 'Гайд', path: '/guide'},
    {id: 4, label: 'Поддержка', path: '/support'},
    {id: 5, label: 'Прайсинг', path: '/pricing'}
  ];


  return (
    <aside className='sidebar'>
      <div className='sidebar__block'>
        <button className='sidebar__icon'>

        </button>
        <Logo
          loading={'eager'}
          className={`sidebar__logo ${pathname ==='/'?'is-active':''}`}
        />
      </div>
      <div className='sidebar__block'>
        <div className="sidebar__block-middle">
          <nav>
            <ul>
              {navItems.map(item => {
                const isActiveLink = pathname === item.path;
                return (
                  <li className='sidebar__navigation-links' key={item.id}>
                    <Link to={item.path} className={`sidebar__navigation-link ${isActiveLink ? 'link-is-active' :''}`}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div className='sidebar__block'>
        <a>
          Вход
        </a>
      </div>
    </aside>
  )
}


export default Sidebar