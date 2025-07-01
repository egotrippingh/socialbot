import { createRoot } from 'react-dom/client'
import { HeaderNavigation } from './headerComp.jsx';
import './main.scss'



createRoot(document.getElementById('root')).render(
  <>
    <HeaderNavigation />
  </>
)
