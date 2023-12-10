import "./App.css";
import { createGlobalStyle } from "styled-components";
import Game from "./components/Game";

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Open Sans', sans-serif;
        background-color: #A8A8A7;
    }`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Game />
      </div>
    </>
  );
}

export default App;
