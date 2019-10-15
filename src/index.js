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
                  
                    
                    {/* <h6 class="card-title" id="balance">Balance : {props.balance}</h6> */}
            
            
                    
                        <div class="card-body">
                        <input type="text" class="form-control" id="height" ></input>
                        <select id="heightoptions">
                            <option value="m">metres</option>
                            <option value="Inches">Inches</option>
                        </select>
                        </div>
                        <div class="card-body">
                        <input type="text" class="form-control" id="weight" ></input>
                        <select id="weightoptions">
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
    
          
            calculate(){
                this.state.weight = document.getElementById('weight').value;
                this.state.height = document.getElementById('height').value;

                var woption = document.getElementById("weightoptions").value;
                var hoption = document.getElementById("heightoptions").value;
                console.log(this.state.weight);
                console.log(this.state.height);
                console.log(woption);
                console.log(hoption);
                

                //if()
                // if (hoption == 'm' && woption == 'kg') {
                
                //     console.log(this.state.weight);
                //     //this.state.result = this.state.weight / (Math.pow(this.state.height,2));
                //     this.state.result = this.state.weight / Math.pow(this.state.height,2);
                //     //this.state.result = this.state.weight / this.state.height ** this.state.height;
                // } else if(hoption == 'Inches' && woption == 'Ibs') {
                //     this.state.result = (this.state.weight / Math.pow(this.state.height,2)) * 703;
                // }
                
              //  this.state.result = this.state.weight / (Math.pow(this.state.height,2));
                this.state.result = Math.round(this.state.weight / Math.pow(this.state.height, 2) * 10000);
                console.log(this.state.result);
               
            }
        
            
            
    
    
      
 
        
            
            render() {
              
            return( 
                <Elements 
                onClickCalculate={() => this.calculate()}
                onClickReset={() => this.reset()} 
                
                />
                )
            }
    
    
    } 


 ReactDOM.render(<Board />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
