import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'
import Support from './components/Support.jsx'
import About from './components/About.jsx'
import Labs from './components/Labs.jsx'
import NotFound from './components/NotFound.jsx'
import { Link, NavLink } from 'react-router-dom'
import MainHeader from './components/MainHeader.jsx'


function App() {
  return (
    <div className="App">

      <nav>
         <h2>⚛️ React Router Demo</h2>
        <ul>
           <li>
            <NavLink to="/">Home</NavLink>
           </li>
           <li>
            <NavLink to="/about">About</NavLink>
           </li>
           <li>
            <NavLink to="/support">Support</NavLink>
           </li>
           <li>
            <NavLink to="/labs">Labs</NavLink>
           </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader/>}>
        {/* Default Raoute */}
        
           <Route index element={<Home/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/labs" element={<Labs/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      
    

      </Routes>

    </div>
  );
}

export default App;