import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Login()
{
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    function logar(e)
    {
        e.preventDefault();

        axios.post('http://127.0.0.1:3003/user/login', 
        {
            'login': usuario,
            'password': senha
        })
        .then((response) => {
            history.push('/livros');
            localStorage.setItem('usuario', usuario);
        })
        .catch(function (error) {
            document.getElementById("titulo").innerHTML = 'Usuário ou senha incorretos! Tente novamente.';
        })
    }

    return(
        <div>
            <section className='form'>

                <form onSubmit={logar} >
                    <h1 id='titulo'>Acesse sua Conta</h1>
                    <input 
                        placeholder='Usuário'
                        value={usuario}
                        onChange={ e => setUsuario(e.target.value) } />

                    <input 
                        type='password' 
                        placeholder='Senha'
                        value={senha}
                        onChange= { e => setSenha(e.target.value) } />

                    <button className='button' type='submit'>Login</button>
                </form>
            </section>
        </div>
    );
}

export default Login;