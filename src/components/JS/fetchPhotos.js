export default function fetchPhotos(searchPrase, page = 1) {
  const searchParams = new URLSearchParams({
    client_id: "BUqEmomTG7T1vLBnVUi4F4sAZAHb-r9RCsxNJ7SWWvI",
    auto: "format",
    page: page,
    per_page: 30,
    query: searchPrase,
  });

  return fetch(`https://api.unsplash.com/photos?${searchParams}`, {
    headers: {
      "Accept-Version": "v1",
    },
  });
}
