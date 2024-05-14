import { useState } from "react";

import styles from "./App.module.css";
import Card from "./components/Card";
import Input from "./components/Input";

function App() {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addFunc = () => {
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
      <div>
        <Input title="제목" value={newTitle} onChange={setNewTitle} />
        <Input
          title="내용"
          value={newDescription}
          onChange={setNewDescription}
        />
        <button onClick={addFunc}>추가하기</button>
      </div>
      <div>Working...🔥</div>
      <ul>
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
            />
          ))}
      </ul>
      <div>Done...!🎉</div>
      <ul>
        {todoList
          .filter((item) => item.isDone)
          .map((itme) => (
            <Card
              key={itme.id}
              title={itme.title}
              description={itme.description}
              id={itme.id}
              deleteFunc={deleteFunc}
              checkFunc={checkFunc}
            />
          ))}
      </ul>
    </div>
  );
}

export default App;
