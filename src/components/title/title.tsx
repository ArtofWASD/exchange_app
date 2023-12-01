import styled from "styled-components";

const Title = () => {
  const Title = styled.h1`
    font-size: 50px;
    line-height: 60px;
    weight: 300;
    font-family: "Roboto";
  `;
  const SubTitle = styled.p`
    font-family: "Roboto";
    font-size: 20px;
    line-height: 20px;
    weight: 400;
  `;
  return (
    <div>
      <Title>Crypto Exchange</Title>
      <SubTitle>Exchange fast and easy</SubTitle>
    </div>
  );
};

export default Title;
