import React, { Component } from 'react';
import './App.css';
import { qDir } from "./masterQuestion.js"

function question_mc8(){
  var a_num_list = [2,3,5,7]
  var x_log_val = a_num_list[Math.floor((Math.random()*3))];
  var x_string = "x = log(" + x_log_val + ")";
  var y_log_val = x_log_val;

  while(y_log_val === x_log_val){
    y_log_val =a_num_list[Math.floor((Math.random()*3))];
  }
  var y_string = "y = log(" + y_log_val + ")";

  var constant_log_val = Math.floor((Math.random()*8)+2);
  var c_string = constant_log_val + "= log(m)";

  var x_power = Math.floor((Math.random()*3)+1);
  var y_power = Math.floor((Math.random()*3)+1);
  var coeff_val = Math.pow(x_log_val,x_power)*Math.pow(y_log_val,y_power);
  var c_power = Math.floor((Math.random()*5)+1);
  var qLogString = "log(" + coeff_val + "m^" +c_power + ")";

  var questionString1 = "Let " + x_string + "," + y_string + " and " + c_string + '. ';
  var questionString2 = "Simply the expression " + qLogString + " to the form Ax + By + C where A,B,C are constants. ";
  var questionString3 = "Enter your answer in the form A,B,C";
  var questionString = questionString1 + questionString2 + questionString3;
  var answerString = x_power + ',' + y_power + ',' + c_power*constant_log_val;
  return [questionString,answerString]
}
var outVals = question_mc8();
console.log(outVals[0]);
console.log(outVals[1]);


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.answerText = ''
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.value === this.props.answer){
      document.getElementById(this.props.idAnswer).innerHTML = "Correct";
    }
    else{
      document.getElementById(this.props.idAnswer).innerHTML = "False";
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} class = "question">
        <label>
          {this.props.qtext}
          <br />
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <br />
          {this.props.answerText}
        </label>
        <input type="submit" value="Submit" />
        <p id = {this.props.idAnswer}>insertAnswer</p>
      </form>
    );
  }
}

function quiz10(){
  var chosen_val = 0
  var chosen_values = []
  var questionList = []
  for(var i = 0;i < 5;i++){
    chosen_val = Math.floor(Math.random()*qDir.length)
    while(chosen_values.includes(chosen_val)){
      chosen_val = Math.floor(Math.random()*qDir.length)
    }
    chosen_values.push(chosen_val);
    var func_chosen = qDir[chosen_val];
    var textValues = func_chosen()
    questionList.push(<NameForm qtext={textValues[0]} answer = {textValues[1]} idAnswer = {"q"+ i}/>);
  }
  return questionList;
}
class App extends Component {
  render() {
    var qList = quiz10()
    return(
      <div>
        {qList}
      </div>
    );
  }
}

export default App;
