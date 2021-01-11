//TODO create methods to retrieve data and update the State
import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { api } from "./AxiosService.js";
class ImageService {
  async getImage() {
    console.log("Getting Image");
    let res = await api.get('images');
    console.log(res.data)
    ProxyState.images = new Image(res.data);
  }
}

const imageService = new ImageService();
export default imageService;