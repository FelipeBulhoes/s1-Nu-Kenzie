import trash from "./delete.png";
import "./style.css";

const TransactionCard = ({ description, type, value }) => {
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

  return (
    <li className={checkValueType().newClass}>
      <main>
        <section className="cardInfo">
          <div>
            <h4>{description}</h4>
          </div>

          <div>
            <span>R${checkValueType().newValue}</span>
            <button className="deleteTransBtn">
              <img src={trash} alt="" />
            </button>
          </div>
        </section>
        <span>{type}</span>
      </main>
    </li>
  );
};

export default TransactionCard;
