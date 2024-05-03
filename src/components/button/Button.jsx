import style from './button.module.css';

const Button = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={style.button}>
      load more
    </button>
  );
};

export default Button;
