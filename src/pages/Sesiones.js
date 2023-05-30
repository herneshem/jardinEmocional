import PEDRO from '../img/Testimonios FOTOS/Pedro.jpg';
// import ANGEL from '../img/Testimonios FOTOS/';
import ESTRELLA from '../img/Testimonios FOTOS/estrella.jpg';
import CompHijo from '../txt/TestEstrella';
import CompHijoP from '../txt/TestPedro'


const Sesiones = () => {
    return (
        <div>
            
            <div className="testimonios">

                <div className="test">
                    <div className="im"><img src={PEDRO}></img></div>
                    <div className="tex" ><CompHijoP /></div>
                </div>
                <div className="test">
                    <div className="tex"><CompHijo /></div>
                    <div className="im"><img src={ESTRELLA}></img></div>
                </div>
                {/* <div className="test">
                    <div className="im"><img src={ESTRELLA}></img></div>
                    <div className="tex"><CompHijo /></div>
                </div> */}

            </div>


        </div>

    )

}
export default Sesiones;