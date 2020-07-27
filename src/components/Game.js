import React from 'react';
import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
import Battle from './Battle'

class Game extends React.Component{

    pickedOption= (e)=> {
        const option = e.currentTarget.value;
        this.props.pickedOption(option)

    }

    render(){
        return(
        this.props.picked ? 
            <div> 
                <Battle picked={this.props.picked} 
                        housePick={this.props.housePick} 
                        house={this.props.house} 
                        playAgain={this.props.playAgain} 
                        finalResult={this.props.finalResult}
                        result={this.props.result}
                />
                
            </div>
                :
            <div className="game__options">
                <button className="game__option rock" value="rock" onClick={this.pickedOption}> <span><img src={rock} alt="Rock"/></span></button>
                <button className="game__option paper" value="paper" onClick={this.pickedOption}><span><img src={paper} alt="Paper"/></span></button>
                <button className="game__option scissors" value="scissors" onClick={this.pickedOption}><span><img src={scissors} alt="Scissors"/></span></button>

            </div>
        )
        
    }
}

export default Game;
