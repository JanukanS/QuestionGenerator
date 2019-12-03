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
  var questionStringC = " To the nearest hundredth of a percent, Joe�s investment pays interest at what %/year compounded annually?";
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
  var questionStringC = "is reflected in the line y = x is:";

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
function question_nr5(){
  var a = Math.floor(Math.random()*5+1) * (Math.random() > 0.5 ? 1 : -1)
  var b = Math.floor(Math.random()*5+1) * (Math.random() > 0.5 ? 1 : -1)
  var c = Math.floor(Math.random()*5+1) * (Math.random() > 0.5 ? 1 : -1)
  var d = Math.floor(Math.random()*5+1) * (Math.random() > 0.5 ? 1 : -1)

  var polyMult = 1
  var poly1 = [1,a,0,0];
  var poly2 = [1,b,0,0];
  var poly3 = [c,d,0,0];
  var polyNum = [0,0,0,0];
  var polyDen = [0,0,0,0];
  var ans = Math.round(-100*d/c)/100;
  for(var i = 0; i < 4; i++){
    for(var j = 0; i + j < 4; j++){
      polyNum[i+j] += poly1[i]*poly2[j]
      polyDen[i+j] += poly1[i]*poly3[j]
    }
  }

  var qString1 = "Let F(x) = N(x)/D(x) where N(x)=";
  var qString2 = polyNum[2] + "x^2 + " + polyNum[1] + "x + " + polyNum[0]
  var qString3 = " and D(x) = " + polyDen[2] + "x^2 + " + polyDen[1] + "x + " + polyDen[0]
  var qString4 = ". Find the value of the vertical asymptote y = k to the nearest hundredth."
  var qString = qString1 + qString2 + qString3;
  var answerString = "" + ans;

  return [qString,answerString];
}
function question_mc23(){
  var fact = function(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * (arguments.callee(n - 1));
  }
  }

  var b = Math.floor(Math.random()*3+3) 
  var a = Math.floor(Math.random()*(6)+ b)
  var ans = 0
  for (var i=3;i <= b; i++){
    ans += fact(a)/(fact(a-i)*fact(i))
  }

  var qString1 = "A circle is drawn with " + a + " points on it circumference. ";
  var qString2 = "A polygon can be created by connecting at least three of the points."
  var qString3 = "How many polygons can be created with no more than " + b + " sides."
  var qString = qString1 + qString2 + qString3;
  var answerString = "" + ans;

  return [qString,answerString];
}



function question_mc11(){
  var a = Math.floor(Math.random()*5+1) * (Math.random() > 0.5 ? 1 : -1)
  var b = Math.floor(Math.random()*8+1) * (Math.random() > 0.5 ? 1 : -1)
  var c = Math.floor(Math.random()*8+1) * (Math.random() > 0.5 ? 1 : -1)

  var polyMult = 1
  var poly1 = [1,a,0,0];
  var poly2 = [polyMult,b,c,0];
  var poly3 = [0,0,0,0];

  for(var i = 0; i < 4; i++){
    for(var j = 0; i + j < 4; j++){
      poly3[i+j] += poly1[i]*poly2[j]
    }
  }

  var qString1 = "Let P(x) = " + poly3[0] + "x^3 + " + poly3[1] + "x^2 +" + poly3[2] + "x +" + poly3[3];
  var qString2 = "= (x + a)(" + poly2[2] + "x^2 + " + poly2[1] + "x +" + poly2[0] + ")." 
  var qString3 = "Find the values of a and b. Enter the values as (a,b)"
  var qString = qString1 + qString2 + qString3;
  var answerString = "(" + a  +"," + b + ")";
  return [qString,answerString];
}

function question_mc7(){
  var a_val = Math.floor((Math.random()*5)+1);
  var b_val = Math.floor((Math.random()*5)+2);
  var c_val = Math.floor((Math.random()*20)+1);
  var questionStringA = "Given the function f(x) = " + a_val + "(1/" + b_val + ")^x - " + c_val
  var questionStringB = ", what is the y-intercept of the graph of y = f^-1(x) to the nearest hundredth?" 
  var answer = Math.log(c_val/a_val) / Math.log(Math.pow(b_val,-1))
  answer = Math.round(answer*100)/100;
  var questionString = questionStringA + questionStringB;
  var answerString = "" + answer
  return [questionString,answerString]
}

function question_mc4(){
  var x_point = Math.floor((Math.random()*20)-10);
  var y_point = Math.floor((Math.random()*20)-10);
  var x_trans = Math.floor((Math.random()*5)+1);
  var y_trans = Math.floor((Math.random()*5)+1);
  var hor_stretch = 0;
  var vert_stretch = 0;

 

  while (hor_stretch==0 || vert_stretch==0){
    hor_stretch = Math.floor((Math.random()*10)-5);
    vert_stretch = Math.floor((Math.random()*10)-5);
  }
  
  if (hor_stretch>0){
    var hor_x = " + "
  } else {
    hor_x = " - "
  }

  var questionStringA = "If Point A(" + x_point + ", " + y_point + ") is a point on the graph of y=f(x), then the corresponding image point, A', on the graph of y = ";
  var questionStringB = vert_stretch + "f(" + hor_stretch + "x" + hor_x + Math.abs(hor_stretch*x_trans) + ") - " + y_trans + " is";
 
  var answerString = "(" + (x_point - hor_stretch*x_trans)/hor_stretch  + ", " + (y_point * vert_stretch - y_trans) + ")";
  var questionString = questionStringA + questionStringB;
  
  return [questionString,answerString]
}

function question_mc2(){
  var x_min = Math.floor((Math.random()*5)+1);
  var x_max = x_min + Math.floor((Math.random()*5)+1);
  var y_min = Math.floor((Math.random()*5)+1);
  var y_max = y_min + Math.floor((Math.random()*5)+1);
  var hor_transform = 0;
  var vert_transform = 0;
  
  while (hor_transform==0 || vert_transform==0){
    hor_transform = Math.floor((Math.random()*10)-5);
    vert_transform = Math.floor((Math.random()*10)-5);
  }

  var questionStringA = "The function y = f(x) has a domain of {x|" + x_min + "≤  x ≤ " + x_max + ",x ∈ R} and a range of {y|" + y_min + "≤ y ≤ " + y_max + ", y ∈ R}.";
  var questionStringB = " The function undergoes the transformation y = " + vert_transform + "f(1/" + hor_transform + "x" + ").";
  var questionStringC = "The domain and range of the transformed function are D:[a, b] and R:[c, d]. Please provide your answer in the format 'a,b,c,d'"
 
  var answerString = "" + x_min*hor_transform + "," + x_max*hor_transform + "," + y_min*vert_transform + "," + y_max*vert_transform 
  var questionString = questionStringA + questionStringB + questionStringC;

  
  return [questionString,answerString]
}

function select_from_array(array){
    
    var i = Math.floor(Math.random() * array.length);
    
    return array[i];
    
}

function question_21() {
    
    var trig_functions = ['csc(x)','sec(x)', 'tan(x)', 'cot(x)']
    
    var first_trig_function = select_from_array(trig_functions);
    
    var second_trig_function = select_from_array(trig_functions);
            
    var second_trig_function = select_from_array(trig_functions);

    var third_trig_function = select_from_array(trig_functions);
    
    while (third_trig_function == first_trig_function == second_trig_function) {
    
        third_trig_function = select_from_array(trig_functions);
    
    }
    
    var trig_array = [first_trig_function, second_trig_function, third_trig_function];
    
    var question = "The non-permissible values of x for the identity " + first_trig_function + second_trig_function + "=" + third_trig_function + " are:";
    
    var answer = question_21_answer(trig_array);
    
    return [question, answer];
    
}

function question_21_answer(trig_array) {
    
    
    var sin_den = false;
    
    var cos_den = false;
    
    var answer;

    if (trig_array.includes('csc(x)') || trig_array.includes('cot(x)')) {
        
        sin_den = true;
    }
    
    if (trig_array.includes('sec(x)') || trig_array.includes('tan(x)')) {
        
        cos_den = true;
    }
    
    if (sin_den && cos_den) {
        
        answer = "n*(π/2), n ∈ I";
    
    } else if (sin_den) {
        
        answer = "(π/2) + nπ, n ∈ I";
        
    } else {
        
        answer = "nπ, n ∈ I";
    }
    
    return answer;
}


var questionDirectory = [question_mc11,question_mc23,question_nr5,question_nr8,question_nr3,question_mc19, question_mc15, question_mc5,question_mc1,question_mc8,question_mc7,question_mc4,question_mc2,question_mc1]
module.exports.qDir = questionDirectory;
