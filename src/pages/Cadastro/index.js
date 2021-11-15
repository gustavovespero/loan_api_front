import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Cadastro()
{
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    function cadastrar(e)
    {
        e.preventDefault();

        axios.post('http://127.0.0.1:3003/user', {
            'login': usuario,
            'password': senha
        })
        .then((response) => {
            console.log(response);

            localStorage.setItem('login', usuario);
            localStorage.setItem('password', senha);

            history.push('/');  
        })
    }

    return(
        <div>
            <section className='form'>

                <form onSubmit={cadastrar} >
                    <h1>Cadastre-se</h1>
                    <input 
                        placeholder='Usuário'
                        value={usuario}
                        onChange={ e => setUsuario(e.target.value) } />

                    <input 
                        type='password' 
                        placeholder='Senha'
                        value={senha}
                        onChange= { e => setSenha(e.target.value) } />

                    <button className='button' type='submit'>cadastrar</button>
                </form>
            </section>
        </div>
    );
}

export default Cadastro;