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
                  
                    
                    <h6 class="card-title" id="balance">Balance : {props.balance}</h6>
            
            
                    
                        <div class="card-body">
                        <input type="text" class="form-control" id="weight" ></input>
                        <select>
                            <option value="kg">cm</option>
                            <option value="Ibs">Inches</option>
                        </select>
                        </div>
                        <div class="card-body">
                        <input type="text" class="form-control" id="weight" ></input>
                        <select>
                            <option value="kg">kg</option>
                            <option value="Ibs">Ibs</option>
                        </select>
                        </div>
                    <button type="button" class="btn btn-dark bet" onClick={props.onClickCalculate}>Calcaluate</button>
                    <button type="button" id="reset-game" class="btn btn-secondary reset-game" onClick={props.onClickReset}>Reset</button>  

        </div>
    )
    }

    class Board extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                 weight : '',
                 height : '',
                 result : ''

                 
            };
            
            } 
    
          
    
        
            
            
    
    
      
 
        
            
            render() {
              
            return( 
                <Elements 
                onClickGame={() => this.firstHalfButtonEventListener()}
                onClickmakeBet={() => this.makeBet()} 
                onClickHit={() => this.hit()}
                onClickStick={() => this.stick()}
                balance={this.state.balance}
                onClickReset={() => this.ResetEventListener()}
                />
                )
            }
    
    
    } 


 ReactDOM.render(<Board />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
