import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// body mass index formula
//The formula is BMI = kg/m2

function Elements(props){
    console.log(props);
        return (   
            <div>

                    <h1>What's Your BMI?</h1>
                  
                    <h1 id="message"></h1>
                    <div id="dcard0">
                    
                    </div>
            
                    <div id="dcard1">
                  
                    </div>
            
            
                    <div class="card playersmoney">
                        <div class="card-body">
                            <h6 class="card-title" id="balance">Balance : {props.balance}</h6>
                            <input type="text" class="form-control" id="amount" ></input>
                            <button type="button" class="btn btn-dark bet" onClick={props.onClickmakeBet}>Bet</button>
                        </div>
                    </div>

                
                    <button type="button" id="new-game" class="btn btn-secondary new-game" onClick={props.onClickGame}>New Game</button>
                    
                    <button type="button" id="reset-game" class="btn btn-secondary reset-game" onClick={props.onClickReset}>Reset</button>  

        </div>
    )
    }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
