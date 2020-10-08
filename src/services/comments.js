import { COMMENTS_DATA } from "../constants/comments.options";

class CommentsService {
  getCommentsByTweetId(id) {
    return new Promise(res => {
      const comments = COMMENTS_DATA.filter(item => item.tweet === id);

      setTimeout(() => {
        res({
          status: 200,
          commets: comments
        });
      }, 1000);
    });
  }
}

export default new CommentsService();
