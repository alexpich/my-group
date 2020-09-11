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

  createOne(group_name, image_url, category_id, user_id) {
    return axios.post(API_URL + "create/", {
      group_name,
      image_url,
      category_id,
      user_id,
    });
  }
}

export default new GroupService();
