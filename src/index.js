import { render } from "react-dom";
// import { useState } from "react"

import InitialPage from './components/InitialPage';
import Cards from './components/Cards';
import Header from './components/Header';

// import Posts from './components/Posts';
// import Sugests from './components/Sugests'
// import Stories from './components/Stories';

function App(){

  return (
    <>
      {/* <InitialPage /> */}
      <Header />
      <Cards />
      {/* <main class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sugests />
        </main> */}
    </>
  );
}

render(<App />, document.querySelector(".root"))