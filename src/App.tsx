import React from "react";
import HomePage from "./pages/HomePage";
import { GlobalStyles, Reset, RootVariables } from "./styles/globalStyles";

function App() {
  return (
    <>
      <Reset />
      <RootVariables />
      <GlobalStyles />
      <HomePage />
    </>
  );
}

export default App;
