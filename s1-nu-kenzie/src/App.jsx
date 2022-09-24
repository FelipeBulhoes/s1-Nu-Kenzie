import { useState } from "react";
import Dashboard from "./components/dashboard";
import InitialPage from "./components/initialPage";

function App() {
  const [inInitialPage, setInitialPage] = useState(true);

  function goToDashboard() {
    setInitialPage(false);
  }

  function goToInitialPage() {
    setInitialPage(true);
  }

  return (
    <>
      {inInitialPage ? (
        <InitialPage goToDashboard={goToDashboard} />
      ) : (
        <Dashboard goToInitialPage={goToInitialPage} />
      )}
    </>
  );
}

export default App;
