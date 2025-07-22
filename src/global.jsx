import {createRoot} from 'react-dom/client'
import '@/styles'
import Sidebar from "@/layouts/Sidebar/Sidebar.jsx";
import Content from "@/layouts/Content/Content.jsx";
import Footer from "@/layouts/Footer/Footer.jsx";


createRoot(document.getElementById('root')).render(<>
  <Sidebar />
  <div className="container">
  </div>
</>)