import { createGlobalStyle } from "styled-components";
import Roboto from "./fonts/Roboto-Regular.ttf";
const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  src: url(${Roboto}) format('ttf'),
}
`;

export default FontStyles;
