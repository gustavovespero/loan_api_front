import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import Livros from './pages/Livros';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import EditarCadastroUsuario from './pages/EditarCadastroUsuario';
import ListaEmprestimo from './pages/ListaEmprestimo';

function Routes()
{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/cadastro' exact component={Cadastro} />
                <Route path='/editar-usuario' exact component={EditarCadastroUsuario} />
                <Route path='/emprestimos' exact component={ListaEmprestimo} />
                <Route path='/livros' component={Livros} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;