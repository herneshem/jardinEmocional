import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
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
       <br></br>
        <Outlet />
      </div>
    </>
  )
};

export default Layout;