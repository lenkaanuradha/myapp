
import './App.css'
import Home from './Page/Home';
import Skills from './Page/Skills';
import Projects from './Page/Projects';
import { Menu } from './Page/Menu.jsx'
import About from './components/ui/About';
import CodingPro from './Page/CodingPro';
import Certification from './Page/Certification';

import Goals from './Page/Goals';



function App() {
 

  return (
    <>
   <Menu></Menu>
 <Home></Home>
 
 <About></About>
 
 
 <Skills></Skills>
 <Projects></Projects>
 <CodingPro></CodingPro>
 <Certification></Certification>
 <Goals></Goals>


    </>
  )
}

export default App
