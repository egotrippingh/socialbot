import './Sidebar.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
  const { pathname } = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { id: 1, icon: '/homepage.svg', label: 'Главная', path: '/' },
    { id: 2, icon: '/info.svg', label: 'О сервисе', path: '/about' },
    { id: 3, icon: '/user_guide.svg', label: 'Гайд', path: '/guide' },
    { id: 4, icon: '/support_agent.svg', label: 'Поддержка', path: '/support' },
    { id: 5, icon: '/payments.svg', label: 'Прайсинг', path: '/pricing' },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className='sidebar__logo'>
        <span className='sidebar__logo-inner'>s</span>
        <span className={`sidebar__logo-inner ${isCollapsed ? 'sidebar__logo-collapsed' : ''}`}>ocial</span>
        <span className='sidebar__logo-inner sidebar__logo-innerR'>R</span>
      </div>

      <button onClick={() => setIsCollapsed(!isCollapsed)} className='sidebar__setActive'>
        <img src='/chevron_left.svg' alt='toggle' />
      </button>

      <nav className='sidebar__navigation'>
        <ul className='sidebar__navigation-block'>
          {navItems.map(({ id, icon, label, path }) => (
            <li key={id} className='sidebar__navigation-element'>
              <div className={`sidebar__navigation-markup ${pathname === path ? 'active__markup' : ''}`}></div>
              <Link to={path} className='sidebar__navigation-link'>
                <img src={icon} alt={label} />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;