import TransactionCard from "../card";
import "./style.css";

const TransactionsList = ({ listTransactions }) => {
  return (
    <section className="transList">
      <div className="filterDiv">
        <h4>Resumo financeiro</h4>
        <nav>
          <button>Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
        </nav>
      </div>
      <div className="mainListDiv">
        <ul>
          {listTransactions ? (
            listTransactions.map(({ description, type, value }) => {
              return (
                <TransactionCard
                  description={description}
                  type={type}
                  value={value}
                />
              );
            })
          ) : (
            <h2>Nao ha items</h2>
          )}
        </ul>
      </div>
    </section>
  );
};

export default TransactionsList;
