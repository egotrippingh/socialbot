import './Sidebar.scss'
import Logo from "@/components/Logo/index.js";

const Sidebar = () => {

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
        <Logo
          loading={'eager'}
          className={"sidebar__logo"}
        />
      </div>
      <div className='sidebar__block'>
        <div className="sidebar__block-middle">
          <nav>
            <ul>
              {navItems.map(item => (
                <li
                  className='sidebar__navigation-links'
                  key={item.id}
                >
                  <a className='sidebar__navigation-link' href={item.path}>
                    {item.label}
                  </a>
                </li>
              ))}
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