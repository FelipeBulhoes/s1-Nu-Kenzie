import { useState } from "react";
import "./App.css";
import InitialPage from "./components/initialPage";

function App() {
  const [inInitialPage, setInitialPage] = useState(true);

  function goToDashboard() {
    setInitialPage(false);
  }

  return (
    <>
      {inInitialPage ? (
        <InitialPage goToDashboard={goToDashboard} />
      ) : (
        <>
          <header>
            <h2>asda</h2>
          </header>
          <main>
            <p>asdasdasd</p>
          </main>
        </>
      )}
    </>
  );
}

export default App;

/*
    <div className="App">
      <div className="App-header"></div>
    </div>
  */
