let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector('.initial');

function buttonClick(value)
{
if(isNaN(value))
{
  handleSymbol(value);
}else
{
  handleNumber(value);
}
screen.innerText = buffer;
}

function handleSymbol(symbol)
{
  switch(symbol){
      case 'C':
        buffer = '0';
        runningTotal = 0;
        break;
      case'=':
        if(previousOperator === null)
        {
          return;
        }
        flushOperation(parseInt(buffer));
        previousOperator = null;
        buffer = runningTotal;
        runningTotal = 0;
        break;
      case '←':
        if(buffer.length === 1)
        {
          buffer = '0';
        } else
        {
          buffer = buffer.substring(0,buffer.length - 1);
        } break;
      case'+':
        handleMath(symbol);
        break;
      case'−':
        handleMath(symbol);
        break;
      case'×':
        handleMath(symbol);
        break;
      case'÷':
        handleMath(symbol);
        break;
  } 
}

function handleMath(symbol)
{
  if(buffer === '0')
  {
    return;
  }

  const intBuffer = parseInt(buffer);
  
  if(runningTotal === 0)
  {
    runningTotal = intBuffer;
  } else 
  {
    flushOperation(intBuffer);
  }
  previousOperator = symbol;
  buffer = '0';
}

function flushOperation(intBuffer)
{
  if(previousOperator === '+')
  {
    runningTotal += intBuffer;
  }else if(previousOperator === '−')
  {
    runningTotal -= intBuffer;
  } else if(previousOperator === '×')
  {
    runningTotal *= intBuffer;
  } else if(previousOperator === '÷')
  {
    runningTotal /=intBuffer;
  }
}

function handleNumber(numberString)
{
  if(buffer === '0')
  {
    buffer = numberString;
  }else{
    buffer+=numberString;
  }
}

function init(){
  document.querySelector('.numbers').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
  document.querySelector('.numbers1').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
  document.querySelector('.numbers2').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
  document.querySelector('.numbers3').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
  document.querySelector('.numbers4').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
  document.querySelector('.numbers5').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
  document.querySelector('.numbers6').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
  document.querySelector('.numbers7').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
  document.querySelector('.numbers8').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
  document.querySelector('.numbers0').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });


  document.querySelector('.things').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
  document.querySelector('.things1').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });


  document.querySelector('.sign').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
  document.querySelector('.sign0').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
  document.querySelector('.sign1').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
  document.querySelector('.sign2').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
  document.querySelector('.sign3').addEventListener('click', function(event){
    buttonClick(event.target.innerText);
  });
}

init();