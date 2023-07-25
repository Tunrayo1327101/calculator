import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// const Hello = (props)=>(
//   <div>
//     <h1>hello react hi my name {props.name} i am {props.age} years  </h1>
//   </div>
// )

function Calculator(){
  const [calc, setCalc] =React.useState({
    current: "0",
    total: "0",
    isInitial: true
  });

  function handleNumber(value){
let newValue = value;
if(!calc.isInitial){
  newValue = calc.current + value;
}
setCalc({current: newValue, total: calc.total, isInitial: false, preOp: calc.preOp});
  }

function handleOperator(value){
 const total = doCalculation();
 
 setCalc({current: total.toString(), total: total.toString(), isInitial:true, preOp: value});
}

  function doCalculation() {
let total = parseInt(calc.total);

switch(calc.preOp) {
  case "+":
    total += parseInt(calc.current);
    break;
    case "-":
    total -= parseInt(calc.current);
    break;
    case "*":
    total *= parseInt(calc.current);
    break;
    case "/":
    total /= parseInt(calc.current);
    break;
    default:
    total = parseInt(calc.current);
  }

return total;
  }

  function renderDisplay(){
    return calc.current;
  }
  function handleClear(){
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: ""
    });
  }
  // function handleEquals(){
  //   let total = doCalculation();
  //   setCalc({current: total.toString(), total: total.toString(), isInitial:true, preOp: "="});
  // }

  return (
  <div className="calcvalue">
    <div className="display">{renderDisplay()}</div>
    <CalcBtn onClick={handleNumber} value="7"/>
    <CalcBtn value="8" onClick={handleNumber}/>
    <CalcBtn value="9" onClick={handleNumber}/>
    <CalcBtn className="operator"  onClick={handleOperator} value="/" />

    <CalcBtn value="4" onClick={handleNumber}/>
    <CalcBtn value="5" onClick={handleNumber}/>
    <CalcBtn value="6" onClick={handleNumber}/>
    <CalcBtn className="operator" value="*" onClick={handleOperator}/>

    <CalcBtn value="1" onClick={handleNumber}/>
    <CalcBtn value="2" onClick={handleNumber}/>
    <CalcBtn value="3" onClick={handleNumber}/>
    <CalcBtn className="operator" value="-" onClick={handleOperator}/>

    <CalcBtn value="C" onClick={handleClear}/>
    <CalcBtn value="0" onClick={handleNumber}/>
    <CalcBtn value="=" onClick={handleOperator}/>
    <CalcBtn className="operator" value="+" onClick={handleOperator}/>
  </div> 
  )
  function CalcBtn(props){
    return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>

  }
}
ReactDOM.render( <div className="app-container"><Calculator /></div>,
  document.getElementById('root'));        