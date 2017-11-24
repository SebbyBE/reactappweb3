import React,{Component} from 'react';

import PacmanImageMenu from './PacmanImageMenu';
import Inscription from './FormulaireInscription';

class Formulaires extends Component{
    render(){
        return(
            <div id="formulaires">
                <PacmanImageMenu />
                <ul className="tab-group">
                    <li className="tab active"><a>Inscription</a></li>
                    <li className="tab"><a>Connexion</a></li>
                </ul>
                <div className="tab-content">
                    <Inscription />
                </div>
            </div>
        );
    }
}

export default Formulaires;