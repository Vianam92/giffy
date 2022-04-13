const apiKey = "9V2RTY0ZNAwQxaCYs44TPkfEtfbqqPcJ";

const getApi = ({ keyword = "morty" }) => {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  )
    .then((response) => response.json())
    .then((resp) => {
      const result = resp.data.map(image => {
        const { title, id } = image;
        const url = image.images.downsized_medium.url;
        return { title, id, url };
      });
      return result;
    })
    .catch((error) => console.log(error));
};

export default getApi;
