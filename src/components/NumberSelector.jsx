import styled from 'styled-components';



const NumberSelector = ({selectedNumber, setSelectedNumber,error,setError}) => {
   const arrayNumber=[1,2,3,4,5,6];
   const numberSelectorHandler =(value)=>{
    setSelectedNumber(value);
    setError("");

   }


  return ( <NumberSelectorContainer>
    <p className="error">{error}</p>
    <div className="flex">
    { arrayNumber.map((value,i) => (
      <Box 
      isSelected={value==selectedNumber}
      key={i}  
      onClick={()=>numberSelectorHandler(value)}>{value}</Box>

    ))}
  </div>
  <p> Select any  Number</p>
  </NumberSelectorContainer>
    
  )
}

export default NumberSelector;
const NumberSelectorContainer= styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
  display: flex;
  gap: 24px;
  

}
.error{
  color:red;
  font-weight: 200;
  margin-bottom: 8px;
}

p{

  font-size: 24px;
  font-weight: 700;
}`

const Box= styled.div`
  height:72px;
  width: 72px;
  border: 1px solid black;
  place-items: center;
  display: grid;
  font-size: 24px;
  font-weight: 800;
  background-color: ${(props) => (props.isSelected ? "black" : " white ")};
  color: ${(props) => (!props.isSelected ? "black" : " white ")};
  cursor: pointer;


`