import logo from './logo.svg';
import './App.css';
import Conferencias from './img/Conferencias.png';
import principal from './img/web fotoresize.jpg'
import Logo from './img/logo corregido corazon.png';
import { Routes, Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Inicio from './pages/Inicio';
import Talleres from './pages/Talleres';
import Sesiones from './pages/Sesiones';
import Blog from './pages/Blog';







function App() {
  return (
    
    <div className="App">
     
      <img src={Logo} className="App-logo" alt="logo" ></img>
        <div className="menu" >
        <nav className="navbar navbar-expand-lg ">
          <ul className=" ulcss  navbar navbar-nav"  >
            <li className="nav-item" ><Link to="/">Sobre mi</Link> </li>
            <li className="nav-item"><Link to="/sesiones">Sesiones</Link> </li>
            <li className="nav-item"><Link to="/talleres">Talleres</Link></li>
            <li className="nav-item"><Link to="/blog">Blog</Link></li>
            <li className="nav-item"><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        
        <Outlet />
      </div>  
      
      {/* <header className="App-home">
        <img src={principal} />

        <div className='cards'>
          <div><img src={Conferencias}></img></div>
          <div><img src={Conferencias}></img></div>
          <div><img src={Conferencias}></img></div>
          <div><img src={Conferencias}></img></div>
        </div>
      </header>

      <form class="formulario" >
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Asunto</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Asunto"></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Mensaje</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div> <br></br>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form> */}

      <Routes path='/'  element={ <Inicio/>}>
        <Route>
        <Route path='/'  element={ <Inicio/>} /> 
          <Route path='talleres' element={ <Talleres/>} />
          <Route path='blog' element={ <Blog/>} />
          <Route path='sesiones' element={ <Sesiones/>} />
          <Route path='contacto' element={ <Inicio/>} />   
        </Route>
             
      </Routes>

    </div>
  );
}

export default App;
