import React from 'react';
import Game from './Game';
import ScorePanel from './ScorePanel';
import Rules from './Rules';
import Footer from './Footer';


export default class Desktop extends React.Component {

  state = {
    score: 0,
    picked: '',
    house: '',
    result: '',
    showRules:undefined
  }

  handleOption = (option) =>{
    this.setState(()=> ({picked: option}))
  }
  handleHousePick= (option) => {
    this.setState(()=> ({house: option}))
  }
  finalResult = (result) =>{
    (result === 'YOU WIN') ? 
      this.setState((prevState)=> ({result, score: prevState.score+1 })) :
      this.setState((prevState)=> ({result, score: prevState.score-1 }))
  }

  playAgain =() =>{
    this.setState(()=> ({house: '', picked: '', result: ''}))
  }

  showRulesClear = () => {this.setState(() => ( {showRules: false} ) );}
  showRules = () => {this.setState(()=> ({showRules: true}))}

    render(){
      return (
        <div className='container'>
          <ScorePanel score={this.state.score}/>
          <Game pickedOption={this.handleOption} 
                housePick={this.handleHousePick} 
                picked={this.state.picked}  
                house={this.state.house}
                finalResult={this.finalResult}
                playAgain={this.playAgain}
                result={this.state.result}/>
                
            <div className="game__rules">
              <div className="rules">
              <Rules showRules={this.state.showRules}
					    showRulesClear={this.showRulesClear}
             />
              </div>
            <button onClick={this.showRules}>RULES</button>
            </div>
            <Footer />
        </div>
      )
    }
  }

