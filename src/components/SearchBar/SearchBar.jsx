import {useForm} from "react-hook-form";
import css from "./SearchBar.module.css";

const SearchBar = ({setQuery}) => {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    setQuery(data.query);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="search" {...register("query")} placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchBar;
