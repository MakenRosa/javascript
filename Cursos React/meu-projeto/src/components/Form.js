import { useState } from 'react';

function Form() {
    function cadUser(e) {
        e.preventDefault();
        console.log('Cadastrando usuário...');
        console.log('Nome: ' + nome);
        console.log('Senha: ' + senha);
    }

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <div>
            <h1>Formulário</h1>
            <form onSubmit={cadUser}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" onChange={(e) => {setNome(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" name="senha" placeholder="Digite sua senha" onChange={(e) => {setSenha(e.target.value)}} />
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Form;