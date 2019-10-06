
class questionObj{
  constructor(genVar,genQ){
    this.varList = [];
    this.qText = ''
    this.aValue = ''
    this.aText = ''
    this.funcGenVar = genVar;
    this.funcGenQ = genQ;
  }
  genContent(){
    this.varList = this.funcGenVar()
    var outputList = this.funcGenQ(this.varList)
    this.qText = outputList[0]
    this.aValue = outputList[1]
    this.aText = outputList[2]
  }
  matchAnswer(attempt){
    if (attempt == String(this.answer)){
      return true
    }
    else{
      return false
    }
  }
  get question(){
    return this.qText
  }
  get answer(){
    return this.aValue
  }
  get explanation(){
    return this.aText
  }
}
function genAddNum(){
  returnList = [Math.floor(Math.random() * 20),Math.floor(Math.random() * 20)]
  return returnList
}

function genAddQ(sumNums){
  var questionText = String(sumNums[0]) + ' + ' + String(sumNums[1])
  var questionAnswer = sumNums[0] + sumNums[1]
  var answerText = questionText + ' = ' + String(questionAnswer)
  return [questionText,questionAnswer,answerText]
}

function letterswapNum(){
  var numLetters = Math.floor(Math.random()*3)+3
  var letterChoice = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
  var duplicates = []
  for(var i = 0;i < letterChoice.length;i++){
    duplicates.push(0)
  }
  var letterList = []
  var returnList = []
  for(var i = 0;i < numLetters;i++){
    var indice = Math.floor(Math.random()*letterChoice.length)
    letterList[i] = letterChoice[indice]
    duplicates[indice] += 1
  }
  console.log(duplicates)
}

changeQuestion()
function changeQuestion() {
    qTest.genContent();
    document.getElementById("qText").innerHTML = qTest.question;
}
function verifyAnswer(){
  userAnswer = document.getElementById("qAnswer").value
  if(userAnswer == qTest.answer){
    alert('True')
  }
  else{
    alert('False')
  }
}

var qTest = new questionObj(genAddNum,genAddQ)
qTest.genContent()
changeQuestion()
