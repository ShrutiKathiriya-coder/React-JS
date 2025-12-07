import axios from "axios";

class WallpaperService {
    pixabayBaseUrl = "https://pixabay.com/api/";
    apiKey = "53407597-b9a53fb366016b0398802dcab";

    async fetchWallpapers(query: string) {
        try {
            const response = await axios.get(
                `${this.pixabayBaseUrl}?key=${this.apiKey}&q=${query}&image_type=photo&per_page=24&safesearch=true`
            );
            return response.data.hits;
        } catch (error) {
            console.log("Error fetching wallpapers:", error);
            return;
        }
    }
}

export const wallpaperService = new WallpaperService();
