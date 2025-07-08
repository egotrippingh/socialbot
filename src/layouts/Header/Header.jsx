import './Header.scss'
import Logo from "@/components/Logo/index.js";

const Header = () => {

  const navItems = [
    {id: 1, label: 'Главная', path: '/'},
    {id: 2, label: 'О сервисе', path: '/about'},
    {id: 3, label: 'Гайд', path: '/guide'},
    {id: 4, label: 'Поддержка', path: '/support'},
    {id: 5, label: 'Прайсинг', path: '/pricing'}
  ];

  return (
    <header className='header'>
      <Logo loading = {'eager'} />
      {navItems.map(item => (
        <nav>
          <li key={item.id}>
            <a href={item.path}>
              {item.label}
            </a>
          </li>
        </nav>
      ))}
    </header>
  )
}
export default Header