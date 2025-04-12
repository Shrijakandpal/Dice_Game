import styled from "styled-components";
const RolledDice = ({currentDice,roleDice}) => {

   


  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`/images/dice/df${currentDice}.png`} alt="dice1"></img>
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RolledDice;

const DiceContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
p {
    margin: 4px 0 0 0; /* remove top margin */
    font-size: 24px;
  }
.dice{
    cursor: pointer;
}

`