import axios from "axios";

const instance = axios.create({
  //The API (cloud function) URL
  baseURL: "https://us-central1-clone-3ab6d.cloudfunctions.net/api",
  //http://localhost:5001/clone-3ab6d/us-central1/api"
});
export default instance;
