import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Livros() {
    const [books, setBoooks] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3003/book')
            .then(response => setBoooks(response.data));
    }, []);

    return (
        <React.Fragment>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                    </tr>
                    {books.map(elemento => (
                        <tr key={elemento.id}>

                            <td>{elemento.id}</td>

                            <td>{elemento.name}</td>

                            <td>{elemento.description}</td>
                                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default Livros;