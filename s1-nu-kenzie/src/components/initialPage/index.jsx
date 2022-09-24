import "../../reset.css";
import "./style.css";
import logo from "./Nu-Kenzie.png";
import financasImg from "./finanças.png";
import illustration from "./illustration.svg";

const InitialPage = ({ goToDashboard }) => {
  return (
    <main className="initialPageMain">
      <div className="infoDiv">
        <img src={logo} alt="logo" className="logo" />
        <img src={financasImg} alt="Texto" className="financasImg" />
        <p>de forma rápida e segura</p>
        <button
          className="goToDashboardBtn"
          onClick={() => {
            goToDashboard();
          }}
        >
          Iniciar
        </button>
      </div>
      <div className="imgDiv">
        <img src={illustration} alt="" />
      </div>
    </main>
  );
};

export default InitialPage;
