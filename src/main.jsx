import { createRoot } from 'react-dom/client'
import { IndexPage } from './pages/index/index.jsx';
import './main.scss'


createRoot(document.getElementById('root')).render(
  <div className='wrapper'>
    <IndexPage />
  </div>
)
