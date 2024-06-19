import {MdSearchOff} from "react-icons/md";

const Notification = () => {
  return (
    <div className="text-center">
      <MdSearchOff className="mx-auto mb-3" size={100} />
      <p className="font-play text-xl mb-3">Sorry! Result not found...</p>
      <p className="font-poiret">We can't find what you were looking for. Please try later again</p>
    </div>
  );
};
export default Notification;
