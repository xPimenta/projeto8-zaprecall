import { render } from "react-dom";
import { useState } from "react"

import InitialPage from './components/InitialPage';
import Header from './components/Header';
// import Cards from './components/Cards';

function App() {
    const [pageStatus, setPageStatus] = useState("initial")

    // function start(){
    //     setPageStatus("start");
    // }

    return (
        <>
            {pageStatus === "initial"
                ? <InitialPage 
                pageStatus={updatedPageStatus => setPageStatus(updatedPageStatus)}
                />
                : <>
                    <Header />
                    {/* <Cards /> */}
                </>
            }
        </>
    );
}

render(<App />, document.querySelector(".root"))