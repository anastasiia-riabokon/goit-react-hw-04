const LoadMore = ({onClick}) => {
  return (
    <>
      <button
        onClick={onClick}
        className="block mx-auto mt-9 rounded-md bg-slate-600 hover:bg-slate-600/80 transition-colors ease-in-out duration-300 text-white p-2 font-play"
      >
        Load More
      </button>
    </>
  );
};
export default LoadMore;
