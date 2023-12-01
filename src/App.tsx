import styled from "styled-components";
import Input from "./components/input/input";
import Title from "./components/title/title";

function App() {
  const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const InputDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2px;
  `

  return (
    <MainDiv>
      <Title />
      <InputDiv>
        <Input />
        <Input />
      </InputDiv>
    </MainDiv>
  );
}

export default App;
