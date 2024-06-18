import css from "./LoadMore.module.css";

const LoadMore = ({onClick}) => {
  return (
    <>
      <button onClick={onClick}>Load More</button>
    </>
  );
};
export default LoadMore;
