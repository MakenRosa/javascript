import { useState } from 'react';

function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
    }

    function limparEmail() {
        setUserEmail('');
    }
    return (
        <div>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <input onClick={enviarEmail} value="Enviar" type="submit" />
            </form>
            {userEmail && (
            <div>
                <p>E-mail cadastrado: {userEmail}</p>
                <button onClick={limparEmail}>Limpar e-mail</button>
            </div>
            )}
        </div>
    )
}

export default Condicional;