import {ThreeDots} from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="grid place-items-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#475569"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};
export default Loader;
