import axios from "axios";
import { header } from "../contants/api";
import { getAuthToken } from "../utils/localStorage";

const request = async params => {
  try {
    const headers = {
      ...params.headers,
      Authorization: ""
    };

    let axiosObject = {
      withCredentials: false,
      ...params,
      headers: headers
    };

    axios.defaults.timeout = 60000;

    let response = await axios(axiosObject);

    if (response && response.data && response.data.errorMessage) {
      return { data: response, status: 500 };
    }

    return response;
  } catch (err) {
    console.error(err.response);

    if (err.response && err.response.status === 401) {
      window.location.reload();
    }

    return { data: err.response, status: 500 };
  }
};

export default {
  get: props =>
    request({
      ...props,
      method: "GET"
    }),
  post: props =>
    request({
      ...props,
      method: "POST"
    }),
  put: props =>
    request({
      ...props,
      method: "PUT"
    }),
  patch: props =>
    request({
      ...props,
      method: "PATCH"
    }),
  delete: props =>
    request({
      ...props,
      method: "DELETE"
    })
};
