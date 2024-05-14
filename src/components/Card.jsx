import Button from "./Button";
import style from "./Card.module.css";

function Card({
  title,
  description,
  id,
  isDone,
  deleteFunc,
  checkFunc,
  className,
}) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <Button
          className={`${className} ${style["red"]}`}
          onClick={() => {
            deleteFunc(id);
          }}
        >
          삭제하기
        </Button>
        <Button
          className={`${className} ${style["green"]}`}
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
