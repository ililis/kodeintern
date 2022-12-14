import axios from "axios";
import KodeLibrary from "../functions/KodeLibrary";

export default class PostService {
  static async getUsersByDepartment (dep, sortType) {
    const response = await axios.get('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=' + dep.toString());
    const dataResponse = response.data.items;
    return KodeLibrary.sortUsers(dataResponse, sortType)
  }

  // static async getUserTracks (id) {
  //   const response = await axios.get('http://localhost:8080/api/usertracks?id=' + id);
  //   return response.data;
  // }
  
  // static async addTrack (reqData) {
  //   const response = await axios.post('http://localhost:8080/api/track', reqData);
  //   return response.data;
  // }

  // static async deleteTrack (id, user_id) {
  //   const response = await axios.delete('http://localhost:8080/api/track?id=' + id + '&user_id=' + user_id);
  //   return response.data;
  // }
}