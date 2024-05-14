import Button from "./Button";

function Card({ title, description, id, isDone, deleteFunc, checkFunc }) {
  return (
    <div>
      {`${isDone}`}
      <div>{title}</div>
      <div>{description}</div>
      <div>
        <Button
          onClick={() => {
            deleteFunc(id);
          }}
        >
          삭제하기
        </Button>
        <Button
          onClick={() => {
            checkFunc(id);
          }}
        >
          {isDone ? "취소" : "완료"}
        </Button>
      </div>
    </div>
  );
}

export default Card;
