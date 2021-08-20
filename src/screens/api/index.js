import axios from "axios";
const BASE_URL = "https://reactgvr.herokuapp.com/api/gvrs";

export async function fetchGVR(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    let Id = data.gvr;
    return Id;
  } catch (error) {
    throw error;
  }
}
