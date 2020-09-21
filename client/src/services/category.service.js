import axios from "axios";

const API_URL = "http://localhost:5000/api/categories/";

class CategoryService {
  getAll() {
    return axios.get(API_URL);
  }

  getOne(id) {
    return axios.get(API_URL + id);
  }
}

export default new CategoryService();
