import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "e5e02954d7c94e63b26c28a320d30786"
    }
})
