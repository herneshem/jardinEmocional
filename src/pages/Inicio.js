import Conferencias from '../img/Conferencias.png';
import Talleres from '../img/Talleres vivenciales.png';

import principal from '../img/web fotoresize.jpg';
import { Outlet, Link } from "react-router-dom";


const Inicio = () =>{

return(

<div>
<header className="App-home">
        <img src={principal} />

        <div className='cards'>
          <div><Link to="/sesiones"><img src={Conferencias}></img></Link></div> 
          <div><Link to="/talleres"><img src={Talleres}></img></Link></div> 
          <div><Link to="/blog"><img src={Conferencias}></img></Link></div> 
          <div><Link to="/contacto"><img src={Conferencias}></img></Link></div> 
          
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
      </form>
</div>

    
)

}
export default Inicio;