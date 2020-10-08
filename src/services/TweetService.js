import axios from "./AxiosClient";

class tweetService {
  async getFeed() {
    const result = await axios.get("/tweets/find/feed");
    return result.data;
  }
}

export default tweetService;
