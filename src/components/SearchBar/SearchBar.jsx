import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {CiSearch} from "react-icons/ci";

const SearchBar = ({setQuery}) => {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    if (data.query.trim() === "") {
      toast.error("Search field must not be empty");
      return;
    }
    setQuery(data.query);
  };
  return (
    <header className="bg-slate-600 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center gap-1">
        <CiSearch color="white" size={32} />
        <input
          type="search"
          {...register("query")}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
          className="bg-transparent text-white py-1 px-2 w-2/4 outline-none font-play tracking-wide text-sm h-8 border-0 border-b border-white"
        />
        <button type="submit" className="text-white font-play tracking-wide text-sm">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
