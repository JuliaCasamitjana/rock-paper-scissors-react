import React from 'react';

export default class Result extends React.Component  {


    playAgain = () => {
        this.props.playAgain()
    }


    render(){
        return(
            <div className="game__result">
                <p>{this.props.result}</p>
                <button onClick={this.playAgain}>PLAY AGAIN</button>
            </div>
        )
    }
    

}
