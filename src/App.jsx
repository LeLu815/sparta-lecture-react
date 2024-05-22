import { useState } from "react";

import styles from "./App.module.css";
import CardContainer from "./components/CardContainer";
import HeadSection from "./components/HeadSection";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addFunc = (
    e,
    newTitle,
    newDescription,
    setNewTitle,
    setNewDescription
  ) => {
    e.preventDefault();
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
          id: Math.random(),
          isDone: false,
        },
      ]);
    });
    setNewTitle("");
    setNewDescription("");
  };
  const deleteFunc = (id) => {
    if (confirm("정말 삭제하시겠습니까?") === false) {
      return;
    }
    setTodoList((itemList) => {
      return itemList.filter((item) => item.id !== id);
    });
  };
  const checkFunc = (id) => {
    setTodoList((itemList) => {
      return itemList.map((item) => {
        if (item.id === id) {
          const newIsDone = !item.isDone;
          return { ...item, isDone: newIsDone };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div className={styles.container}>
      <HeadSection />
      <TodoForm addFunc={addFunc} />
      <div className={styles["head-section"]}>Working...🔥</div>
      <CardContainer
        isDone={false}
        todoList={todoList}
        deleteFunc={deleteFunc}
        checkFunc={checkFunc}
      />
      <div className={styles["head-section"]}>Done...!🎉</div>
      <CardContainer
        isDone={true}
        todoList={todoList}
        deleteFunc={deleteFunc}
        checkFunc={checkFunc}
      />
    </div>
  );
}

export default App;
