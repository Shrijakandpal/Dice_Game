import styled from 'styled-components';
 export const Button = styled.button`

cursor: pointer;
background-color:black;
color: white;
min-width: 220px;
border: none;
border-radius: 5px; 
padding: 10px 18px;
font-size: 20px;
border: 1px solid transparent;
transition: 0.4s background ease-in;
&:hover{
    background-color: #ffffff;
    color: black;
    border:1px solid black;
    transition: 0.3s background ease-in;
    
}

`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;