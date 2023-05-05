import Conferencias from '../img/Conferencias.png';
import principal from '../img/web fotoresize.jpg';


const Inicio = () =>{

return(

<div>
<header className="App-home">
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
      </form>
</div>

    
)

}
export default Inicio;