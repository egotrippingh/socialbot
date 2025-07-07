import {createRoot} from 'react-dom/client'
import '@/styles'
import Header from "@/layouts/Header/Header.jsx";
import Content from "@/layouts/Content/Content.jsx";
import Footer from "@/layouts/Footer/Footer.jsx";


createRoot(document.getElementById('root')).render(<>
  <div className="container">
    <Header />
    <Content />
    <Footer />
  </div>
</>)