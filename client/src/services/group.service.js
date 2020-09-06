import axios from "axios";

const API_URL = "http://localhost:5000/api/groups/";

class GroupService {
  getAll() {
    return axios.get(API_URL);
  }
}

export default new GroupService();
