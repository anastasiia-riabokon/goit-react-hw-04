import {useState} from "react";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {CiSearch} from "react-icons/ci";
import {RxCross1} from "react-icons/rx";

const SearchBar = ({setQuery}) => {
  const {register, handleSubmit, reset} = useForm();
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (data) => {
    if (data.query.trim() === "") {
      toast.error("Search field must not be empty");
      return;
    }
    setQuery(data.query);
    setSearchTerm("");
    reset();
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };
  return (
    <header className="bg-slate-600 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center gap-1 ">
        <CiSearch color="white" size={32} />
        <div className="relative w-2/4">
          <input
            type="search"
            {...register("query")}
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-white py-1 px-2 w-full outline-none font-play tracking-wide text-sm h-8 border-0 border-b border-white "
          />
          {searchTerm && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
            >
              <RxCross1 size={20} />
            </button>
          )}
        </div>
        <button type="submit" className="text-white font-play tracking-wide text-sm">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
