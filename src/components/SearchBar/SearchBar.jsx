import {useForm} from "react-hook-form";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({setQuery, found}) => {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    if (data.query.trim() === "") {
      toast.error("Search field must not be empty");
      return;
    }
    setQuery(data.query);

    if (!found) return toast.error("Not found results");
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
