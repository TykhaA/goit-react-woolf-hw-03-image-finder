import style from './header.module.css';
const Header = ({ handleChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
    handleChange(e.target.elements.value.value);
    e.target.reset();
  };
  return (
    <header className={style.searchbar}>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.searchForm_button}>
          <span className={style.searchForm_button_label}>Search</span>
        </button>

        <input
          className={style.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="value"
        />
      </form>
    </header>
  );
};
export default Header;
