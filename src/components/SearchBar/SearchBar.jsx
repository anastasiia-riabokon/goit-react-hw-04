import {useForm} from "react-hook-form";
import css from "./SearchBar.module.css";

const SearchBar = ({setQuery}) => {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    setQuery(data.query);
  };
  return (
    <header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="search"
          {...register("query")}
          placeholder="Search..."
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default SearchBar;
