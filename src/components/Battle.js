import React from 'react';
import Result from './Result';

class Battle extends React.Component {

    componentDidMount() {

        const options=['paper', 'rock', 'scissors'];
        const index = options.indexOf(this.props.picked)
        options.splice(index, 1)

        const random = Math.floor(Math.random() *2)

        setTimeout(() => {
            this.props.housePick (options[random])
         }, 1000);

         setTimeout(() => {
            let result = ""

            if (this.props.picked === 'rock' && this.props.house === 'paper'){
                result = 'YOU LOSE'
            }else if (this.props.picked === 'scissors' && this.props.house ==='rock'){
                result = 'YOU LOSE'
            }else if (this.props.picked === 'paper' && this.props.house ==='scissors'){
                result = 'YOU LOSE'
            }else{
                result = 'YOU WIN'

            }
            this.props.finalResult(result) 
         }, 2000);
         
    }

    render(){
        let effectPicked = ''
        let effectHouse = ''

        if (this.props.result === 'YOU WIN'){
            effectPicked = 'effect' 
        }else if (this.props.result === 'YOU LOSE'){
            effectHouse= 'effect'
        }

    return(
    <div className="game__house">
        <div className="game__house__icon game__picked">
            <p>YOU PICKED</p>
            <button className={`game__option ${effectPicked} ${this.props.picked} `}>
                <span><img src={require('../images/icon-' + this.props.picked + '.svg')} alt={`You picked ${this.props.picked}` }/></span>
            </button>
            
        </div>
        <div className="game__house__icon game__house">
            <p>THE HOUSE PICKED</p>
            <p className="game__dot"></p>
            {this.props.house && 
            <button className={`game__option ${effectHouse} ${this.props.house}`}>
                <span><img src={require('../images/icon-' + this.props.house + '.svg')} alt={`You picked ${this.props.house}`}/></span>
            </button>}
        </div>

        {this.props.result && 
            <Result picked={this.props.picked} 
                    house={this.props.house}  
                    playAgain={this.props.playAgain}
                    result={this.props.result}/>
        }
    </div>
    )}
} 

export default Battle;