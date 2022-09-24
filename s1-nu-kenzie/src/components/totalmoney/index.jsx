import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const onlyValues = listTransactions.map((trans) => trans.value);
  const total = onlyValues.reduce((current, previous) => current + previous, 0);

  return (
    <section className="totalDisplay">
      <div>
        <h4>Valor Total:</h4>
        <span>R$ {total}</span>
      </div>
      <p>O valor se refere ao saldo</p>
    </section>
  );
};

export default TotalMoney;
