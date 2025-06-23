import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  width: 300px;
  margin: 100px auto;
  background: #1e1e1e;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
`;

export const Display = styled.div`
  background: #000;
  color: #0f0;
  font-size: 2rem;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: right;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const Button = styled.button`
  background: #333;
  color: #fff;
  font-size: 1.5rem;
  padding: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #555;
  }

  &:active {
    background: #777;
  }
`;
