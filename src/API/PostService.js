import axios from "axios";

export default class PostService {
    static async getAll(limit = 20, offset = 0) {
        return await axios.get("http://127.0.0.1:8000/api/v1/posts/",
            {
                params: {
                    limit: limit,
                    offset: offset
                }
            });
    }
}
