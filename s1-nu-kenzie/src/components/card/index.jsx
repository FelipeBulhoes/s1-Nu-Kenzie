import trash from "./delete.png";
import "./style.css";

const TransactionCard = ({
  description,
  type,
  value,
  listTransactions,
  setListTransactions,
}) => {
  function checkValueType() {
    const tempData = {
      newValue: 0,
      newClass: "",
    };

    if (type === "Saída") {
      tempData.newValue = Math.abs(value);
      tempData.newClass = "subtr";
    } else {
      tempData.newValue = value;
      tempData.newClass = "entry";
    }
    return tempData;
  }

  function deleteCard(name) {
    const newArr = listTransactions.filter((trans) => {
      if (trans.description !== name) {
        return trans;
      }
    });
    setListTransactions(newArr);
  }

  return (
    <li className={checkValueType().newClass}>
      <main>
        <section className="cardInfo">
          <div>
            <h4>{description}</h4>
          </div>

          <div>
            <span>R${checkValueType().newValue}</span>
            <button
              id="deleteTransBtn"
              className={description}
              onClick={(event) => {
                deleteCard(event.target.className);
              }}
            >
              <img src={trash} alt="" className={description} />
            </button>
          </div>
        </section>
        <span>{type}</span>
      </main>
    </li>
  );
};

export default TransactionCard;
