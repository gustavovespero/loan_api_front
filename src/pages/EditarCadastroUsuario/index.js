import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function EditarUsuario()
{
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [novaSenha, setNovaSenha] = useState('');

    const history = useHistory();

    function editar(e)
    {
        e.preventDefault();

        axios.put('http://127.0.0.1:3003/edit/user', {
            'login': usuario,
            'password': senha,
            'new_password': novaSenha
        })
        .then((response) => {
            history.push('/livros');
        })
        .catch(function (error) {
            document.getElementById("titulo").innerHTML = 'Usuário não existe ou senha atual incorreta! Tente novamente.';
        })
    }

    return(
        <div>
            <section className='form'>

                <form onSubmit={editar} >
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

                    <input 
                        type='password' 
                        placeholder='Nova senha'
                        value={novaSenha}
                        onChange= { e => setNovaSenha(e.target.value) } />

                    <button className='button' type='submit'>Atualizar</button>
                </form>
            </section>
        </div>
    );
}

export default EditarUsuario;