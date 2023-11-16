
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Aboutus from './components/Aboutus';
import Fields from './components/Fields';
import Services from './components/Services';
import Knowledge from './components/Knowledge';
import Certificates from './components/Certificates';
import Ourclients from './components/Ourclients';
import Footer from './components/Footer';



function App() {


  return (
    <div className='bgMain py-4 px-5 w-full'>
      <Hero/>
      <Aboutus/>
      <Fields/>
      <Services/>
      <Knowledge/>
      <Certificates/>
      <Ourclients/>
      <Footer/>
    </div>
  )
}

export default App
