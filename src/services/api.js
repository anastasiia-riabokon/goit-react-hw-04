import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getPhotos = async (option) => {
  const {data} = await axios.get("/search/photos", {
    params: {
      client_id: "NAdwF5ykUfPayD0HWbUShSHz1AdB1Y3WJNt6bg-UgLU",
      per_page: 15,
      orientation: "landscape",
      ...option,
    },
  });
  return data;
};
