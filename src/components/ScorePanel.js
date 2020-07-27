import React from 'react'

const ScorePanel = (props) => (
    <div className="scorePanel">
        <h1>
            ROCK <br/>
            PAPER<br/>
            SCISSORS<br/>
        
        </h1>
        <div>
            <p>SCORE</p>
            <h2>{props.score}</h2>
        </div>
    </div>
)

export default ScorePanel;