import React, { Component } from 'react';
import Accueil from './Accueil';
import Formulaires from './Formulaires';
import Profil from './Profil';
import Game from './GameComponent';

import * as states from './AppState';

class BigContainer extends Component{
    constructor(props){
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            current: states.HOME
        }
    }
    handler = (constState) =>{
        this.state.current = constState;
    }
    render(){
        var active = this.state.current;
        console.log(active);
        return(
            <div className="container col-xs-8 col-xs-offset-2">
                {active === states.HOME ? (
                    <Accueil action={this.handler} />  
                ): active === states.NO_CONNECTION ? (
                    <Formulaires action={this.handler}/>
                ): active === states.CONNECTED ? (
                    <Game action={this.handler}/>
                ): active === states.PROFILE ? (
                    <Profil action={this.handler}/>
                )
                : ""}
            </div>
        );
    }
}

export default BigContainer;