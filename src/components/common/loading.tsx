import style from './loading.module.css';

export const Loading = () => {
  return (
    <div className={style.container}>
      <div className={style.spinner}></div>
      <p className={style.text}>Loading...</p>
    </div>
  );
};
