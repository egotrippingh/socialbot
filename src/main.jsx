import {createRoot} from 'react-dom/client'
import {IndexPage} from './pages/index/index.jsx';
import './main.scss'
import Header from "@/components/Header/";
import Content from "@/components/Content/";
import Footer from "@/components/Footer/";


createRoot(document.getElementById('root')).render(<>
  <Header />
  <Content />
  <Footer />
</>)
