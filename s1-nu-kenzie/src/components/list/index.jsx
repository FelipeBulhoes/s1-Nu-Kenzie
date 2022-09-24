import TransactionCard from "../card";
import "./style.css";
import noCards from "./NoCard.png";
import { useState } from "react";

const TransactionsList = ({ listTransactions, setListTransactions }) => {
  return (
    <section className="transList">
      <div className="filterDiv">
        <h4>Resumo financeiro</h4>
        <nav>
          <button className="notActiveBtn">Todos</button>
          <button className="notActiveBtn">Entradas</button>
          <button className="notActiveBtn">Despesas</button>
        </nav>
      </div>
      <div className="mainListDiv">
        <ul>
          {listTransactions.length === 0 ? (
            <>
              <h2>Você ainda não possuí lançamentos</h2>
              <img src={noCards} alt="" />
            </>
          ) : (
            listTransactions.map(({ description, type, value }) => {
              return (
                <TransactionCard
                  description={description}
                  type={type}
                  value={value}
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                />
              );
            })
          )}
        </ul>
      </div>
    </section>
  );
};

export default TransactionsList;
