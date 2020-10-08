import { TWEETS_DATA } from "../constants/tweets.options";

class TweetsService {
  getAllTweets() {
    return new Promise(res => {
      setTimeout(() => {
        res({
          status: 200,
          tweet: TWEETS_DATA
        });
      }, 2000);
    });
  }
}

export default new TweetsService();
