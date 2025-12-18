const API_BASE = "http://localhost:3000/api/v1";

export const getPages = async () =>
  fetch(`${API_BASE}/pages`).then(res => res.json());

export const getCategories = async () =>
  fetch(`${API_BASE}/categories`).then(res => res.json());

export const getProducts = async (query = "") =>
  fetch(`${API_BASE}/products?q=${query}`).then(res => res.json());


export const getFaqs = async () =>
  fetch(`${API_BASE}/faqs`).then(res => res.json());

export const getTestimonials = async () =>
  fetch(`${API_BASE}/testimonials`).then(res => res.json());


export const submitContact = async (data) => {
  const response = await fetch(`${API_BASE}/contact_submissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contact_submission: data,
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw err;
  }

  return response.json();
};


export const getCart = async () =>
  fetch(`${API_BASE}/cart`).then(res => res.json());

export const addToCartAPI = async (productId) =>
  fetch(`${API_BASE}/cart/add_item`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ product_id: productId }),
  }).then(res => res.json());