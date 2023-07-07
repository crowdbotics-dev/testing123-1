import axios from "axios"
import { LOGIN_USERNAME, LOGIN_PASSWORD } from "react-native-dotenv"
const login = axios.create({
  baseURL: "https://youtube.com",
  auth: { username: LOGIN_USERNAME, password: LOGIN_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function login_get__read(payload) {
  return login.get(`/`)
}
export const apiService = { login_get__read }
