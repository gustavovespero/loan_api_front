import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ListaEmprestimo() {

    function deletar (id) {
        axios.delete(`http://127.0.0.1:3003/loan/${id}`)
        .then(
            console.log('Deletado')    
        )
        .catch(function (error) {
            console.log(error);
        });
    }

    const [loans, setLoans] = useState([]);

    useEffect(() => {
        const dados = {
            'login': localStorage.getItem('usuario')
        }

        console.log(dados);

        axios.post('http://127.0.0.1:3003/loan/user', dados)
        .then(
            response => setLoans(response.data)    
        )
        .catch(function (error) {
            console.log(error);
        });
    }, []);

    return (
        <React.Fragment>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>Empréstimo</th>
                        <th>Data</th>
                        <th>Livros</th>
                    </tr>
                    {loans.map(elemento => (
                        <tr key={elemento.id}>
                            <td>{elemento.id}</td>
                            <td>{elemento.createdAt}</td>
                            <td><button id="deletar" onClick = {() => deletar(elemento.id)} >deletar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default ListaEmprestimo;