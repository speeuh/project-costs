import Button from "./event/Button"

function Evento(){
    function primeiroEvento(){
        console.log("Primeiro evento clickado!")
    }

    function segundoEvento(){
        console.log("Segundo evento clickado!")
    }

    return(
        <div>
            <p>Clique aqui para disparar um evento</p>
            <Button event={primeiroEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento