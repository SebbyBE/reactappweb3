import React,{Component} from 'react';
import Script from 'react-load-script';

class GameComponent extends Component{
    render(){
        return(
            <div id="jeu">
            <div className="col-xs-0 col-sm-0 col-md-1" id="left_pannel"></div>
            <div className="col-xs-12 col-sm-12 col-md-10" id="gameDiv">
            </div>
            <div className="col-xs-0 col-sm-0 col-md-1" id="right_pannel"></div>
            <Script url={process.env.PUBLIC_URL + "/js/main.js"}/>
            </div>
        );
    }
}

export default GameComponent;