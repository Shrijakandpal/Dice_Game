import styled from "styled-components";
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RolledDice from "./RolledDice";
import { useState } from "react";
import Rules from "./Rules";
import { Button, OutlineButton } from "../styled/Button";
const GamePlay = () => {

  const [error, setError]= useState("");
  const [score,setScore] = useState(0);
  const [showRules, setShowRules]=useState(false);

  const generateRandomNumber = (min,max) =>{
    return Math.floor(Math.random() * (max-min)+ min );
};

const roleDice=() =>{
  if(!selectedNumber) {
    setError("Please Select a number first");
    return;
  }
  
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice( (prev) => randomNumber);
    if(selectedNumber==randomNumber){
      setScore((prev)=> prev+randomNumber);
    }
    else{
      setScore((prev)=> prev-2);
    }
    setSelectedNumber(undefined);
};
const resetScore=()=>{
  setScore(0);
}



  const [selectedNumber, setSelectedNumber]= useState();

  const [currentDice,setCurrentDice]= useState(1);
  return ( <MainContainer> 
    <div className="top_sec">
    <TotalScore 
    score={score}/>
    <NumberSelector 
    selectedNumber={selectedNumber}
    setSelectedNumber={setSelectedNumber}
    error={error}
    setError={setError}
    />
    
    
 </div>
 <RolledDice
 currentDice={currentDice} 
 roleDice={roleDice}
 />
 <div className="buttons">
  <OutlineButton 
  onClick={resetScore}>Reset</OutlineButton>
  <Button
  onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Show Rules</Button>
 </div>
 {  showRules &&
  <Rules/>}
 </MainContainer>
   
  )
}

export default GamePlay;
const MainContainer= styled.div`
padding-top: 70px;
.top_sec{
  display: flex;
  justify-content: space-around;
  align-items: end;

}
.buttons{
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
}
 

`