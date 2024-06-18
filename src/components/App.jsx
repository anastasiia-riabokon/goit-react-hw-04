import {useState, useEffect} from "react";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import LoadMore from "./LoadMore/LoadMore";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import {getPhotos} from "../services/api";
import {Toaster} from "react-hot-toast";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [results, setResults] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const {total_pages, results, total} = await getPhotos({query, page});
        setPhotos((prev) => [...prev, ...results]);
        setShowLoadMore(total_pages > 1);
        setResults(total !== 0);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      getData();
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
      <SearchBar setQuery={handleQuery} found={results} />
      <Toaster position="top-right" reverseOrder={false} />
      {!error ? <ImageGallery photos={photos} /> : <ErrorMessage />}
      {isLoading && <Loader />}
      {!isLoading && showLoadMore && <LoadMore onClick={handleLoadMore} />}
      <ImageModal />
    </div>
  );
}

export default App;
