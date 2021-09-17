import css from "./loading-spinner.module.css";

function LoadingSpinner() {
  return (
    <div className={css["sk-folding-cube"]}>
      <div className={`${css["sk-cube1"]} ${css["sk-cube"]}`}></div>
      <div className={`${css["sk-cube2"]} ${css["sk-cube"]}`}></div>
      <div className={`${css["sk-cube3"]} ${css["sk-cube"]}`}></div>
      <div className={`${css["sk-cube4"]} ${css["sk-cube"]}`}></div>
    </div>
  );
}

export default LoadingSpinner;
