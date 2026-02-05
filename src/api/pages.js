import axios from "axios";

// const API_BASE = "http://localhost:3000/api/v1";

const API_BASE = "https://pharma-website-vh4b.onrender.com/api/v1";


export const fetchPages = () =>
  axios.get(`${API_BASE}/pages`);

export const fetchPage = (slug) =>
  axios.get(`${API_BASE}/pages/${slug}`);

export const submitContact = (data) =>
  axios.post(`${API_BASE}/contact_submissions`, {
    contact_submission: data
  });
