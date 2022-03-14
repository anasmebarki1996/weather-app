import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

AxiosInstance.interceptors.request.use(
  async (config: any) => {
    config.params = {
      ...config.params,
      // appid: "4dbb99a484f361b9fb107d1492894aa4",
      appid: "61391eefa561e941cb4ed87b6ff42827",
    };
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response: { data: unknown }) =>
    new Promise((resolve, reject) => {
      resolve(response.data);
    }),
  (error: { response: { status: number; data: any } }) => {
    return new Promise((resolve, reject) => {
      reject({
        status: error.response.status,
        data: error.response.data,
      });
    });
  }
);

export { AxiosInstance };
