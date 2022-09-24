import logo from "./Nu-Kenzie.png";

const MainHeader = ({ goToInitialPage }) => {
  return (
    <div>
      <img src={logo} alt="" />
      <button
        onClick={() => {
          goToInitialPage();
        }}
      >
        Inicio
      </button>
    </div>
  );
};

export default MainHeader;
