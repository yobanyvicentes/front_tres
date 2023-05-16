import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LoginButton } from './components/auth0/LoginButton'
import { Header } from './components/ui/Header'
import { MarcaView } from './components/marcas/MarcaView';
import { TipoEquipoView } from './components/tipos/TipoEquipoView';
import { EstadoEquipoView } from './components/estados/EstadoEquipoView';
import { EstadoEquipoUpdate } from './components/estados/EstadoEquipoUpdate';
import { TipoEquipoUpdate } from './components/tipos/TipoEquipoUpdate';
import { MarcaUpdate } from './components/marcas/MarcaUpdate';
import { useAuth0 } from "@auth0/auth0-react";


export const App = () => {
    const { isAuthenticated } = useAuth0();
    return <Router>
        {isAuthenticated ? (<>
            <Header />
            <Switch>
                <Route exact path='/' component={MarcaView} />
                <Route exact path='/marcas' component={MarcaView} />
                <Route exact path='/estadoEquipos' component={EstadoEquipoView} />
                <Route exact path='/tipos' component={TipoEquipoView} />
                <Route exact path='/estadoEquipo/edit/:estadoEquipoId' component={EstadoEquipoUpdate} />
                <Route exact path='/tipoEquipo/edit/:tipoEquipoId' component={TipoEquipoUpdate} />
                <Route exact path='/marca/edit/:marcaId' component={MarcaUpdate} />
                <Redirect to='/' />
            </Switch>
        </>) : (<>
            <LoginButton />
        </>)}
    </Router>
}
