import { CalculatorContainer, Display, ButtonGrid, Button } from './styles';
import { useInput } from '../contexts/InputContext';
import { useState } from 'react';


export default function Calculator() {
  const {
    addFirstNumber,
    firstNumber,
    changeOperator,
    operator,
    addSecondNumber,
    secondNumber,
    addToHistory,
    clearHistory,
    history,
  } = useInput();

  const [display, setDisplay] = useState('');

  const handleInput = (value: string) => {
    if (!operator) {
      const newVal = firstNumber + value;
      addFirstNumber(newVal);
      setDisplay(newVal);
    } else {
      const newVal = secondNumber + value;
      addSecondNumber(newVal);
      setDisplay(firstNumber + ' ' + operator + ' ' + newVal);
    }
  };

  const handleOperator = (op: string) => {
    if (!firstNumber) return;
    changeOperator(op);
    setDisplay(firstNumber + ' ' + op);
  };

  const calculate = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let result = 0;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : NaN;
        break;
      default:
        return;
    }
    addToHistory(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
    setDisplay(String(result));
    addFirstNumber(String(result));
    changeOperator('');
    addSecondNumber('');
  };

  const clear = () => {
    addFirstNumber('');
    changeOperator('');
    addSecondNumber('');
    setDisplay('');
  };

  return (
    <>
    <CalculatorContainer>
      <h2>Calculadora</h2>
      <Display>{display}</Display>
      <ButtonGrid>
        {[1,2,3,4,5,6,7,8,9,0].map((n) => (
          <Button key={n} onClick={() => handleInput(String(n))}>{n}</Button>
        ))}
        <Button onClick={clear}>C</Button>
        <Button onClick={clearHistory}>CC</Button>
        <Button onClick={() => handleOperator('*')}>*</Button>
        <Button onClick={() => handleOperator('/')}>/</Button>
        <Button onClick={() => handleInput('.')}>.</Button>
        <Button onClick={() => handleOperator('-')}>-</Button>
        <Button onClick={() => handleOperator('+')}>+</Button>
        <Button onClick={calculate}>=</Button>
      </ButtonGrid>
    </CalculatorContainer>
    <div>
      <h3>Histórico</h3>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul> 
      </div>
    </>
  );
}
