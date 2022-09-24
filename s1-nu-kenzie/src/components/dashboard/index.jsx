import RegisterTrasactionForm from "../form";
import MainHeader from "../header";
import TransactionsList from "../list";
import TotalMoney from "../totalmoney";
import "./style.css";
import { useState } from "react";

const Dashboard = ({ goToInitialPage }) => {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      <header>
        <MainHeader goToInitialPage={goToInitialPage} />
      </header>
      <main className="dashboardMain">
        <div className="formsDiv">
          <RegisterTrasactionForm
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="mainTransList">
          <TransactionsList
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
