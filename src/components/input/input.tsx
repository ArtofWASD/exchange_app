import styled from "styled-components";

const Input = () => {

  const Select = styled.select`
  width:328px
  height: 50px;
  
  `;
  return (
    <>
      <form>
        <Select name="currency" id="currency">
          <option value="BTC">111</option>
          <option value="BTC">222</option>
          <option value="BTC">33</option>
          <option value="BTC">144411</option>
        </Select>
      </form>
    </>
  );
};

export default Input;
