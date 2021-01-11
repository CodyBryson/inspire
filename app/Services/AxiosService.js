// @ts-ignore
export const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/",
  timeout: 10000
});
//@ts-ignore
export const imageapi = axios.create({
  baseURL: "https://source.unsplash.com/random",
  timeout: 10000
});