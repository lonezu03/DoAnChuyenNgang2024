
import './App.css'
import Menu from './component/menu.jsx'
import Banner from './component/baner.jsx'
import ListSP from './component/listSP.jsx'
import Login from './component/login.jsx'
import Dangky from './component/dangky.jsx'
import Footer2 from './component/footer2.jsx'
import DetailItem from './component/chitietSP.jsx'
import Description from './component/description.jsx';
import AboutUs2 from './component/aboutus2.jsx'

function App() {

  return (
    <div className='static'>
    <div className='static'><Menu/></div>
     <div className='relative translate-y-20'><Banner/></div>
     <div><ListSP/></div>
     <div><Login/></div>
     <div><Dangky/></div>
     {/* <div><Footer/></div> */}
     <div><Footer2/></div>
     <div><DetailItem/></div>
     <div><Description/></div>
     <div><AboutUs2/></div>
    </div>
  )
}

export default App
