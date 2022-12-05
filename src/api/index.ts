import axios from "axios";
import { AuthForm } from "./formPayload";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const login = (formData: AuthForm) => API.post('/auth/login', formData);