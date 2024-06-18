import {useState, useEffect} from "react";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import LoadMore from "./LoadMore/LoadMore";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import {getPhotos} from "../services/api";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      const {total_pages, results} = await getPhotos({query});
      setPhotos((prev) => [...prev, ...results]);
    };
    if (query) {
      getData();
    }
  }, [query]);

  const handleQuery = (query) => {
    setQuery(query);
    setPhotos([]);
  };
  return (
    <div>
      <LoadMore />
      <SearchBar setQuery={handleQuery} />
      <ImageGallery photos={photos} />
      <Loader />
      <ErrorMessage />
      <ImageModal />
    </div>
  );
}

export default App;
