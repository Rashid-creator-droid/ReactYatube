import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/posts",
            {params: {
                _limit: limit,
                _page: page
                }})
        return response
    }
}