import Button from './Button';

function Evento({numero}) {
    function meuEvento() {
        console.log('Evento disparado' + numero);
    }

    function segundoEvento() {
        console.log('Segundo evento disparado');
    }
    return (
        <div>
            <h1>Evento</h1>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
        </div>
    );
}

export default Evento;