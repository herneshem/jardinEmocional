import ANTONIO from '../img/Testimonios FOTOS/ANTONIO GONZÁLES.png';
import EVA from '../img/Testimonios FOTOS/EVA KONDILI.png';
import MARIE from '../img/Testimonios FOTOS/MARIE ASTRID.png';
import MONIKA from '../img/Testimonios FOTOS/MÓNIKA MÉZAROS.png';
import PILAR from '../img/Testimonios FOTOS/PILAR MONTALVÁN.png'

const Blog = () => {
    return (
        <div>
            
            <div className="testimonios">

                <div className="test">
                    <div className="im"><img src={ANTONIO}></img></div>
                    <div className="tex">tex</div>
                </div>
                <div className="test">
                    <div className="tex">text</div>
                    <div className="im"><img src={EVA}></img></div>
                </div>
                <div className="test">
                    <div className="im"><img src={MARIE}></img></div>
                    <div className="tex">tex</div>
                </div>
                <div className="test">
                    <div className="tex">text</div>
                    <div className="im"><img src={MONIKA}></img></div>
                </div>
                <div className="test">
                    <div className="im"><img src={PILAR}></img></div>
                    <div className="tex">tex</div>
                </div>

            </div>

        </div>

    )

}
export default Blog;