import axios from "axios";

const API_BASE = "http://localhost:3000/api/v1";

export const fetchPages = () =>
  axios.get(`${API_BASE}/pages`);

export const fetchPage = (slug) =>
  axios.get(`${API_BASE}/pages/${slug}`);
