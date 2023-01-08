import axios from "axios";
import {getPagesOffset} from "../utils/pages";


export default class PostService {
    static async getAll(limit = 10, offset = 0) {
        return await axios.get("http://127.0.0.1:8000/api/v1/posts/",
            {
                params: {
                    limit: limit,
                    offset: getPagesOffset(offset)
                }
            });
    }
}

