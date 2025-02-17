import axios from "axios";

const LOCAL_DATABASE_PATH = "http://localhost:9000"

export const api = axios.create({
    baseURL: LOCAL_DATABASE_PATH
})