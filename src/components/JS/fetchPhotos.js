import axios from "axios";

export default async function fetchPhotos(searchTerm, page) {
  const result = await axios.get("https://api.unsplash.com/search/photos?", {
    params: {
      client_id: "BUqEmomTG7T1vLBnVUi4F4sAZAHb-r9RCsxNJ7SWWvI",
      auto: "format",
      page: page,
      per_page: 30,
      query: searchTerm,
    },
    headers: {
      "Accept-Version": "v1",
    },
  });
  return result.data;
}
