import { useState } from "react";

import styles from "./App.module.css";
import Card from "./components/Card";
import Input from "./components/Input";

function App() {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addFunc = () => {
    if (newTitle === "") {
      alert("제목을 입력해주세요!");
      return;
    } else if (newDescription === "") {
      alert("내용을 입력해주세요!");
      return;
    }
    setTodoList((list) => {
      return list.concat([
        {
          title: newTitle,
          description: newDescription,
          id: `${Math.random()}`,
          isDone: false,
          deleteFunc,
          checkFunc,
        },
      ]);
    });
    setNewTitle("");
    setNewDescription("");
  };
  const deleteFunc = (id) => {
    setTodoList((itemList) => {
      return itemList.filter((item) => item.id !== id);
    });
  };
  const checkFunc = (id) => {
    setTodoList((itemList) => {
      return itemList.map((item) => {
        if (item.id === id) {
          const newIsDone = Boolean(!item.isDone);
          console.log(newIsDone);
          return { ...item, isDone: newIsDone };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>My Todo List</span>
        <span>React</span>
      </header>
      <div className={styles["input-container"]}>
        <Input
          className={styles["input-component"]}
          title="제목"
          value={newTitle}
          onChange={setNewTitle}
        />
        <Input
          className={styles["input-component"]}
          title="내용"
          value={newDescription}
          onChange={setNewDescription}
          maxLength="30"
        />
        <button className={styles["add-btn"]} onClick={addFunc}>
          추가하기
        </button>
      </div>
      <div className={styles["head-section"]}>Working...🔥</div>
      <ul className={styles["card-container"]}>
        {todoList
          .filter((item) => !item.isDone)
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
      <div className={styles["head-section"]}>Done...!🎉</div>
      <ul className={styles["card-container"]}>
        {todoList
          .filter((item) => item.isDone)
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
    </div>
  );
}

export default App;
