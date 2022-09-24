import "./style.css";

const RegisterTrasactionForm = ({ listTransactions, setListTransactions }) => {
  let holdData = {
    description: "",
    type: "",
    value: 0,
  };

  function handleTransactionDescription(description) {
    holdData.description = description;
  }
  function handleTransactionType(type) {
    holdData.type = type;
  }
  function handleTransactionValue(value) {
    holdData.value = parseInt(value);
  }
  function checkTransactionType(obj) {
    if (obj.type === "Saída") {
      const newValue = Math.abs(obj.value) * -1;
      holdData.value = newValue;
      setListTransactions([...listTransactions, holdData]);
    } else {
      setListTransactions([...listTransactions, holdData]);
    }
  }

  return (
    <form className="registerSection">
      <div className="registerMainDiv1">
        <h5>Descrição</h5>
        <input
          type="text"
          placeholder="Digite sua descrição"
          onChange={(event) => {
            handleTransactionDescription(event.target.value);
          }}
        />
        <span>Ex: Compra de roupas</span>
      </div>
      <div className="registerMainDiv2">
        <div className="subDiv1">
          <h5>Valor</h5>
          <input
            type="text"
            maxLength="6"
            onChange={(event) => {
              handleTransactionValue(event.target.value);
            }}
          />
          <h3>R$</h3>
        </div>
        <div className="subDiv2">
          <h5>Tipo de valor</h5>
          <select
            onChange={(event) => {
              handleTransactionType(event.target.value);
            }}
          >
            <option value="" disabled selected>
              Selecionar
            </option>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <button
        className="insertTransactionBtn"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          checkTransactionType(holdData);
        }}
      >
        Inserir valor
      </button>
    </form>
  );
};

export default RegisterTrasactionForm;
