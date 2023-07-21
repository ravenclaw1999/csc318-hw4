import React, { useState } from 'react';
import './index.css'; // Import the CSS file for styling

function Calculator() {
  const [input, setInput] = useState('0');

  function calculateResult() {
    try {
      let expression = input;
      expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
      expression = expression.replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan');
      expression = expression.replace(/ln/g, 'Math.log').replace(/log/g, 'Math.log10');
      expression = expression.replace(/([0-9.]+)!/g, 'factorial($1)');

      const answer = eval(expression);
      setInput(answer.toString());
    } catch (error) {
      setInput('Error');
    }
  }

  function handleButtonClick(value) {
    if (value === '=') {
      calculateResult();
    } else if (value === 'AC') {
      setInput('0');
    } else if (value === 'EXP') {
      setInput((prevInput) => prevInput + '**');
    } else if (value === '√') {
      try {
        const sqrtResult = Math.sqrt(eval(input)).toString();
        setInput(sqrtResult);
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput((prevInput) => {
        if (prevInput === '0' && !isNaN(value)) {
          return value;
        } else {
          return prevInput + value;
        }
      });
    }
  }

  // Custom factorial function
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }

  const buttons = [
    ['Deg', 'e', '(', ')', '%', 'AC'],
    ['sin', 'x!', '7', '8', '9', '÷'],
    ['cos', 'ln', '4', '5', '6', '×'],
    ['tan', 'log', '1', '2', '3', '-'],
    ['EXP', '√', '0', '.', '='],
    ['+']
  ];

  return (
    <div className="calculator">
      <input type="text" value={input} disabled />
      <table>
        <tbody>
          {buttons.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((buttonValue, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="button"
                    value={buttonValue}
                    onClick={() => handleButtonClick(buttonValue)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
