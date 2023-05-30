
const TextEstrella = () => {
    const text1 = "Me llamo Estrella Checa, me dedico a cambiar el estilo de las personas para que proyecten su verdadera esencia con su imagen. También soy artista, hago estilismos para fotos, diseño joyas, hago collages y escribo. Quiero agradecerle a Luisa toda la ayuda que me brindó a través de su coaching basado en la ingeniería emocional. A través de este método fui capaz de darle la vuelta a una relación tirante que tenía en el ámbito laboral, aprendí que esa persona se comportaba de acuerdo a su tipología de la personalidad y porqué chocaba con la mía. Al conocer esto, aprendí cómo tratarla para evitar fricciones. En apenas una semana fui capaz de revertir la situación, con el consiguiente ahorro de sufrimiento, ¡fue mágico! Luisa es sagaz y lista, amorosa y simpática, ¡crecer con ella es una experiencia poderosa!, porque es cercana y certera, y tiene mucha intuición y sabiduría. Además todo lo hace fácil y agradable, y también cuida de que tú fluya con tu verdadera esencia y con la vida y las circunstancias, tomando siempre precauciones, pero sin cerrarte a las oportunidades y a la alegría. Ella te transforma, puedo decir que hay un antes y un después en mi tras su paso por mi vida. Gracias Luisa ❤.";

    return (
        <div>   
            <CompHijo mensaje={text1}/>       
        </div>
        
    )

}
function CompHijo({mensaje}){
    return   <p>{mensaje}</p>
    
}

export default TextEstrella;


// const TextosTestimonio = () => {
//     const text1 = "primer testimonios";
//     const text2 = "hola2";
//     const text3 = "hola3";


//     return (
//         <div>
//             <CompHijo mensaje={text1}/>
//             <CompHijo mensaje2={text2}/>
//             <CompHijo mensaje3={text3}/>

//         </div>
        
//     )

// }
// function CompHijo({mensaje}){
//     return  <h1>{mensaje}</h1>
    
// }
// export default TextosTestimonio;