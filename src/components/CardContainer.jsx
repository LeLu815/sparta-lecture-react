import styles from "../App.module.css";
import Card from "./Card";

function CardContainer({ isDone, todoList, deleteFunc, checkFunc }) {
  return (
    <ul className={styles["card-container"]}>
      {todoList
        .filter((item) => isDone === item.isDone)
        .map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            id={item.id}
            isDone={item.isDone}
            deleteFunc={deleteFunc}
            checkFunc={checkFunc}
            className={styles["card"]}
          />
        ))}
    </ul>
  );
}

export default CardContainer;
