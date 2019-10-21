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
                    <h6 >Result : {props.message}</h6>
        </div>
    )
    }

    class Board extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                 weight : '',
                 height : '',
                 result : '',
                 message:''
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
                
                //convert to  units to metric
                if (hoption == 'Inches') {
                   //this.state.height = (this.state.height * 2.54) / 100;
                    this.setState({
                        height:(this.state.height * 2.54) / 100
                    });
                }
                if (woption == "Ibs") {
                   // this.state.weight = this.state.weight / 2.2046;
                    this.setState({
                        weight:this.state.weight / 2.2046
                    });
                }
                console.log(this.state.height);
                console.log(this.state.weight);
      
                
               // this.state.result = this.state.weight / (Math.pow(this.state.height,2));
                this.setState({
                    result:this.state.weight / (Math.pow(this.state.height,2))
                });
                //this.state.result = Math.round(this.state.weight / Math.pow(this.state.height, 2) * 10000);
                console.log(this.state.result);
               
                if (this.state.result <= 18.5) {
                    //this.state.message = 'Underweight';
                    this.setState({
                        message:'Underweight'
                    });
                }  if (this.state.result >= 18.5 ) {
                   // this.state.message = 'Normal';
                    this.setState({
                        message:'Normal'
                    });
                }  if (this.state.result >= 25) {
                    //this.state.message = 'Obese';
                    this.setState({
                        message:'Obese'
                    });
                } if (this.state.result > 30) {
                    //this.state.message = 'Overweight';
                    this.setState({
                        message:'Overweight'
                    });
                }
             

            }
    
            
            render() {
            
            return( 
                <Elements 
                onClickCalculate={() => this.calculate()}
                onClickReset={() => this.reset()}
                message={this.state.message}
                />
                

                
          
                )
            }
    
    
    } 


 ReactDOM.render(<Board />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
