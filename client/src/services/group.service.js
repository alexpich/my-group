import axios from "axios";

const API_URL = "http://localhost:5000/api/groups/";

class GroupService {
  getAll() {
    return axios.get(API_URL);
  }

  getAllByCategory(catId) {
    return axios.get(API_URL + "category/" + catId);
  }

  getOne(id) {
    return axios.get(API_URL + id);
  }
}

export default new GroupService();
