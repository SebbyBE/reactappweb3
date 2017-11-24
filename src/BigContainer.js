import React, { Component } from 'react';
import Accueil from './Accueil';
import Formulaires from './Formulaires';

class BigContainer extends Component{
    render(){
        return(
            <div className="container col-xs-8 col-xs-offset-2">
                <Accueil />
                <Formulaires />
            </div>
        );
    }
}

export default BigContainer;