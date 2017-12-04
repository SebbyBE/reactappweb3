import React,{Component} from 'react';
import axios from 'axios';

class FormulaireConnexion extends Component {
  constructor(props){
    super(props);
    this.state={
      login: "",
      mdp: ""
    };
    this.login = this.login.bind(this);
    this.textInputChanged = this.textInputChanged.bind(this);
  }

  login = (ev) =>{
    ev.preventDefault();
    console.log("je dois encore faire des trucs");
    axios.post('/seConnecter',{
      login:this.state.login,
      passwd:this.state.mdp
    }).then((result) =>{
      console.log(result);
      sessionStorage.setItem("authName",result.data.authName);
      sessionStorage.setItem("token",result.data.toker);
    }).catch((err) => {
      console.log(err);
    }
    );
    
  }
  loginFacebook = (ev) =>{
    ev.preventDefault();
    console.log("Je dois encore faire des trucs FB")
  }

  textInputChanged(ev) {
    console.log("id", ev.target.id);
    console.log("valeur", ev.target.value);
    this.setState({[ev.target.id]: ev.target.value});
  }

    render(){
        return(
        <div id="login">
            <h1>On joue?</h1>
            <div id="form">
            <div className="row">
              <label>Pseudo<span className="req">*</span></label>
              <input type="text" required autoComplete="off" id="login" value={this.state.id} onChange={this.textInputChanged}/>
            </div>
            <div className="row">
              <label>Mot de passe<span className="req">*</span></label>
              <input type="password" required autoComplete="off" id="mdp" value={this.state.mdp} onChange={this.textInputChanged}/>
            </div>
            <div className="row no-padding">
              <div className="col-xs-6 col-sm-8 col-lg-9"></div>
              <div className="col-xs-6 col-sm-4 col-lg-3">
                <input className="col-xs-1" type="checkbox" value="remember"/>
                <label className="col-xs-11 greenLabel" htmlFor="remember">
                        Se souvenir de moi
                      </label>
              </div>
            </div>
            <div className="row">
              <button className="button button-block" id="seConnecter" onClick={this.login}>Se connecter</button>
            </div>
            <div className="row">
              <button className="button button-block" id="facebookConnect" onClick={this.loginFacebook}>Se connecter avec Facebook</button>
            </div>
          </div>
          </div>
        );
    }
}

export default FormulaireConnexion;