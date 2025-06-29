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
    width: 300px;
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

export const DisplayLabel = styled.div`
  font-size: 1rem;
  margin-bottom: 5px;

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

export const FooterContainer = styled.footer`
  // box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2), 4px 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1rem 1rem;
  // background-color: white;
  // margin-top: 3rem;
  text-align: center;
`;

export const FooterHeading = styled.h5`
  font-weight: bold;
  margin-top: 1rem;
`;

export const FooterLogo = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
`;

export const Menu = styled.div`
  margin: 1rem 0;
`;

export const MenuText = styled.a`
  text-decoration: none;
  color: #888888;
  font-size: medium;
  margin: 0 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

export const SocialList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-top: 1rem;
`;

export const SocialItem = styled.li`
  margin: 0 0.5rem;
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  color: #f5c030;

`;

export const Copyright = styled.p`
  color: #646464;
  font-size: small;
  margin-top: 1rem;
`;

export const HistoryButton = styled.button`
  background: #181C2A;
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  padding: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background:#f5c030;
    color: #0E1116;
  }

  &:active {
    background: #777;
  }
`;