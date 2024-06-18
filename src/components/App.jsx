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
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    try {
      const getData = async () => {
        const {total_pages, results} = await getPhotos({query, page});
        setPhotos((prev) => [...prev, ...results]);
        setShowLoadMore(total_pages > 1);
      };
      if (query) {
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  }, [query, page]);

  const handleQuery = (query) => {
    setQuery(query);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <SearchBar setQuery={handleQuery} />
      <ImageGallery photos={photos} />
      {showLoadMore && <LoadMore onClick={handleLoadMore} />}
      <Loader />
      <ErrorMessage />
      <ImageModal />
    </div>
  );
}

export default App;
