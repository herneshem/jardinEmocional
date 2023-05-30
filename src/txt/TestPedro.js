
const TextPedro = () => {
    const text1 = "Las circunstancias extremas que la vida nos plantea asumir, no siempre nos encuentra preparados para poder afrontarlas, en mi caso se vincularon un proceso patológico (infección al sistema respiratorio) paralelo a un proceso de depresión crónico; este último factor vinculada a la salud mental encontró una alternativa profesional de gestión en Jardín Emocional a través de las herramientas que profesionalmente desarrolla Luisa Lozano; después de largos meses de trabajo y aceptación de mis fortalezas y debilidades, debo manifestar que hay un antes y un después en mi vida, la misma que hoy afronto con la mayor motivación posible para continuar cumpliendo mis metas y objetivos establecidos.";

    return (
        <div>
            <CompHijoP mensaje={text1} />
        </div>

    )

}
function CompHijoP({ mensaje }) {
    return <p >{mensaje}</p>

}

export default TextPedro;


