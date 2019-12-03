function question_nr8(){
  var a_val = Math.floor((Math.random()*3)+1);
  var a_coeff = Math.floor((Math.random()*8)+2);
  var b_val = -1*Math.floor((Math.random()*2)+1);
  var b_coeff = Math.floor((Math.random()*8)+2);
  var n_val = Math.floor((Math.random()*2)+1)

  var highest_val = a_val*n_val + "n";
  var lowest_val = b_val*n_val + "n";


  var questionString1 = "In this question we examine the binomial expansion: "
  var questionString2 = "(" + a_coeff + 'x^' + '('+ a_val +')' + ' + ' + b_coeff + 'x^' + '('+ b_val +')'  + ")^"
  if(n_val == 1){
    questionString2 = questionString2 + 'n. '
  }
  else{
    questionString2 = questionString2 + '('+ n_val + 'n). '
  }
  var questionString3 = "Find the number of terms (An + B) and the ";
  var answerString = "";
  if(Math.random() >= 0.5){
    questionString3 = questionString3 + "highest power of the expansion (Cn + D). "
    answerString = n_val + ',' + 1 + ',' + a_val*n_val + ',' + 0;
  }
  else{
    questionString3 = questionString3 + "lowest power of the expansion. (Cn + D). "
    answerString = n_val + ',' + 1 + ',' + b_val*n_val + ',' + 0;
  }
  var questionString4 = "Express your answer as A,B,C,D"
  var questionString = questionString1 + questionString2 + questionString3 + questionString4;
  return [questionString,answerString];
}

function question_nr3(){
  var a_val = Math.floor((Math.random()*1000)+800);
  var b_val = Math.floor((Math.random()*10)+2);
  var c_val = Math.floor((Math.random()*5)+1);
  var questionStringA = "Joe invested $" + a_val + " at a fixed annual interest rate compounded annually."
  var questionStringB = " At the end of " +  b_val + " years, the investment has increased in value by a factor of " + c_val + ".";
  var questionStringC = " To the nearest hundredth of a percent, Joe’s investment pays interest at what %/year compounded annually?";
  var answer = Math.pow(10,Math.log10(c_val)/b_val) - 1
  answer = Math.round(answer*10000)/100;
  var questionString = questionStringA + questionStringB + questionStringC;
  var answerString = "" + answer
  return [questionString,answerString]
}

function question_mc19(){
  var off_ground = Math.floor(Math.random()*6) + 1 // between 1 and 6
  var seconds = (Math.floor(Math.random()*5) + 1)*10 // between 10 and 50 seconds
  var big_meters = (Math.floor(Math.random()*10) + 5)*5 // between 25 and 50
  var small_meters= (Math.floor(Math.random()*4) + 2)*5 // between 10 and 25

  var ques1 = "An amusement park has two ferris wheels that both load passengers at the bottom," + off_ground + "m above the ground. Both wheels require " + seconds + " seconds to complete one revolution. The larger ferris wheel has a diameter of " + big_meters + "m and the smaller ferris wheel has a diameter of " + small_meters + "m."
  var equation = "h(t) = acos[b(t-c)]+d"
  var ques2 = "The height of a passenger on each wheel can be expressed in the form " + equation + ", where h(t) is the height above the ground in metres t seconds after the ride begins."
  var ques3 = "The two parameters must be different in the two functions are: "
  var ques = ques1 + ques2 + ques3

  var ans = "a and b"

  return [ques,ans]
}

function question_mc15(){
  var diameter = Math.floor(Math.random()*25) + 10 // between 10 and 35
  var traveled = Math.floor(Math.random()*9) + 1 // between 1 and 10

  var ques1 = "A circular carousel has a diameter of " + diameter + "m. "
  var ques2 = "An adult is standing on the outer edge of the spinning carousel. The central angle formed when the adult travels " + traveled + "m, to the nearest degree, is"
  var ques = ques1 + ques2

  var circum = diameter*Math.PI
  var ans = Math.round(360*(traveled/circum))

  return [ques, ans]
}

function question_mc8(){
  var a_num_list = [2,3,5,7]
  var x_log_val = a_num_list[Math.floor((Math.random()*3))];
  var x_string = "x = log(" + x_log_val + ")";
  var y_log_val = x_log_val;

  while(y_log_val == x_log_val){
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

function question_mc5(){
  var a_val = Math.floor((Math.random()*10)+1);
  var b_val = Math.floor((Math.random()*10)+1);
  var c_val = Math.floor((Math.random()*10));
  var det = b_val*b_val - 4*a_val*c_val;
  
  if(det > 0){
    var invar_points = 2;
  }
  else if(det < 0){
    var invar_points = 0;
  }
  else{
    var invar_points = 1;
  }

  var questionStringA = "The number of points that would be invariant when the graph of y = ";
  var questionStringB = a_val + "x^2 + " + b_val+1 + "x + " + c_val;
  var questionStringC = " is reflected in the line y = x is:";

  var questionString = questionStringA + questionStringB + questionStringC;
  var answerString = "" + invar_points;
  return [questionString,answerString]
}

function question_mc1(){
  var a_val = Math.floor((Math.random()*10)+1);
  var b_val = Math.floor((Math.random()*10)+1);
  var c_val = Math.floor((Math.random()*10)+1);
  var d_val = Math.floor((Math.random()*10)+1);
  var questionStringA = "The point P(" + a_val + ", " + b_val + ") is on the graph of y = b^x, where b>1."
  var questionStringB = " The corresponding point, P', on the graph of y + " + c_val + "=b^(x + " + d_val +  ") is";
  var answer = "(" + (a_val - d_val) + ", " + (b_val - c_val) + ")"
  var questionString = questionStringA + questionStringB;
  var answerString = "" + answer
  return [questionString,answerString]
}

var questionDirectory = [question_nr8,question_nr3,question_mc19, question_mc15, question_mc5,question_mc1];
module.exports = {
  qDir: questionDirectory,
}