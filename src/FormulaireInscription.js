import React,{Component} from 'react';

class FormulaireInscription extends Component {
    render(){
        return(
            <div id="signup">
                <h1>Prêt à jouer? Inscis toi!</h1>
                <div id="messageInscription"></div>

                <div id="form">

                <div className="row">
                    <label>Pseudo<span class="req">*</span></label>
                    <input type="text" required autocomplete="off" id="pseudoInscription" />
                </div>

                <div className="row">
                    <label>Mot de passe<span class="req">*</span></label>
                    <input type="password" required autocomplete="off" id="mdpInscription" />
                </div>

                <div class="row">
                    <button type="submit" class="button button-block" id="sInscrire" >C'est parti!</button>
                </div>

                </div>
            </div>
        );
    }
}

export default FormulaireInscription;