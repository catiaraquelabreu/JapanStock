import style from "../Button/style.module.scss";

function Btn(props) {
  const content = props.content;
  return (
    <>
      <button style={{ height: `${props.height}` }} className={style.btn}>
        {content}
      </button>
    </>
  );
}
export default Btn;
