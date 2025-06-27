import { CalculatorContainer, Display, ButtonGrid, 
        Button, Grid, HistoryContainer, HistoryTitle,
        HistoryButton, DisplayLabel } from './styles';
import { useInput } from '../contexts/InputContext';
import { useState } from 'react';


export default function Calculator() {

  const [display, setDisplay] = useState('0');
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

  const buttons = [
  'C', 'CC', '*', '/',
  '7', '8', '9', '-',
  '4', '5', '6', '+',
  '1', '2', '3', '=',
  '0', '.'
  ];
  
  const specialSpans: Record<string, { col?: number; row?: number }> = {
    '0': { col: 2 },
    '=': { row: 2 },
  };

  const [historyVisible, setHistoryVisible] = useState(false);
  const toggleHistory = () => setHistoryVisible(!historyVisible);


  const handleInput = (value: string) => {

    if (!operator) {
      if (value === '.' && firstNumber === '') {
        addFirstNumber('0.');
        setDisplay('0.');
        return;
      }

      if (value === '0' && (firstNumber === '0' || firstNumber === '')) {
        addFirstNumber('0');
        setDisplay('0');
        return;
      }

      if (value === '.' && firstNumber.includes('.')) return;

      if (value !== '0' && firstNumber === '0') {
        addFirstNumber(value);
        setDisplay(value);
        return;
      }

      const newVal = firstNumber + value;
      addFirstNumber(newVal);
      setDisplay(newVal);
    } else {
      if (value === '.' && secondNumber === '') {
        addSecondNumber('0.');
        setDisplay(firstNumber + ' ' + operator + ' 0.');
        return;
      }

    if (value === '0' && (secondNumber === '0' || secondNumber === '')) {
      addSecondNumber('0');
      setDisplay(firstNumber + ' ' + operator + ' 0');
      return;
    }

    if (value === '.' && secondNumber.includes('.')) return;

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
    addFirstNumber('0');
    changeOperator('');
    addSecondNumber('');
    setDisplay('0');
  };

  const clearEntries = () => {
    clearHistory();
    clear();
  };

  return (
    <>
    <Grid>
    <CalculatorContainer>
      <Display>
        <DisplayLabel>{history[history.length - 1]}</DisplayLabel>{display}</Display>
    <ButtonGrid>
    {buttons.map((btn, index) => {
      const span = specialSpans[btn] || {};
        return (
          <Button
            key={index}
            $colSpan={span.col}
            $rowSpan={span.row}
            onClick={() => {
                if (btn === '') return;
                else if (btn === 'C') clear();
                else if (btn === 'CC') clearEntries();
                else if (btn === '=') calculate();
                else if (['+', '-', '*', '/'].includes(btn)) handleOperator(btn);
                else handleInput(btn);
           }}
          >
          {btn}
        </Button>
      );
    })}
    </ButtonGrid>
    </CalculatorContainer>
    <HistoryContainer>
      <HistoryButton onClick={toggleHistory}>Show History</HistoryButton>
      { historyVisible ?
        
      <HistoryTitle>
        {history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </HistoryTitle> 
    
      : ' '}
      </HistoryContainer>
      </Grid>
    </>
  );
}
