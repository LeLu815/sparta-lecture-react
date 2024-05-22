import { useState } from "react";

import styles from "../App.module.css";
import Input from "./Input";

function TodoForm({ addFunc }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  return (
    <form
      onSubmit={(e) => {
        addFunc(e, newTitle, newDescription, setNewTitle, setNewDescription);
      }}
      className={styles["input-container"]}
    >
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
      <button type="submit" className={styles["add-btn"]}>
        추가하기
      </button>
    </form>
  );
}

export default TodoForm;
