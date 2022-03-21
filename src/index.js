import { render } from "react-dom";
import { useState } from "react"

import InitialPage from './components/InitialPage';
import Header from './components/Header';
import Cards from './components/Cards';



function App() {
    const [pageStatus, setPageStatus] = useState("initial")


    return (
        <>
            {pageStatus === "initial"
                ? <InitialPage
                    pageStatus={updatedPageStatus => setPageStatus(updatedPageStatus)}
                />
                : <>
                    <Header />
                    <>
                    <div className="cards">
                    <Cards />
                    </div>
                    </>
                </>
            }
        </>
    );
}

render(<App />, document.querySelector(".root"))