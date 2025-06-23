import styled from 'styled-components';

interface ButtonProps {
  $colSpan?: number;
  $rowSpan?: number;
}

export const Grid = styled.div`
    display: flex;
    flex-direction: row;

`;

export const HistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    margin: 100px auto;
    padding: 20px;
`;

export const HistoryTitle = styled.h2`
    list-style-type: none;
    font-size: 1.2rem;
`;

export const CalculatorContainer = styled.div`
  width: 400px;
  margin: 100px auto;
  background: #0E1116;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 30px 20px rgba(0, 0, 0, 0.3);
`;

export const Display = styled.div`
  background: #252D4A;
  color:rgb(255, 255, 255);
  font-size: 2rem;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: right;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 60px; 
  gap: 10px;
`;

export const Button = styled.button<ButtonProps>`
  background: #181C2A;
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  padding: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

    ${({ $colSpan }) => $colSpan && `grid-column: span ${$colSpan};`}
    ${({ $rowSpan }) => $rowSpan && `grid-row: span ${$rowSpan};`}

  &:hover {
    background:rgb(54, 63, 99);
  }

  &:active {
    background: #777;
  }
`;

