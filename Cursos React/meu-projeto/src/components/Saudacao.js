function Saudacao ({nome}) {
    function gerarSaudacao(nome) {
        if (nome) {
            return <p>Olá, {nome}</p>
        } else {
            return <p>Olá, visitante</p>
        }
    }
    return <>
    <p>Saudação:</p>
    {gerarSaudacao(nome)}
    </>
}

export default Saudacao