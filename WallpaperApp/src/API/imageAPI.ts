import axios from "axios";

class ImageFetchService {
    pixabayEndpoint = "https://pixabay.com/api/";
    accessKey = "53407597-b9a53fb366016b0398802dcab";

    async loadPictures(searchTerm: string) {
        try {
            const apiResponse = await axios.get(
                `${this.pixabayEndpoint}?key=${this.accessKey}&q=${searchTerm}&image_type=photo&per_page=24&safesearch=true`
            );
            return apiResponse.data.hits;
        } catch (err) {
            console.log("Error loading pictures:", err);
            return;
        }
    }
}

export const imageAPI = new ImageFetchService();
