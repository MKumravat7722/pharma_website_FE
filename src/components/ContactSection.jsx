import { useState } from "react";
import { submitContact } from "../api/api";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    submission_type: "doctor_enquiry",
    meta: {},
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await submitContact(form);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        submission_type: "doctor_enquiry",
        meta: {},
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-900">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mt-2">
          For doctor enquiries, product information, or samples
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 bg-white shadow rounded-lg p-8 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border p-3 rounded w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="border p-3 rounded w-full"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="border p-3 rounded w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {success && (
            <p className="text-green-600 mt-2">
              Thank you! We will contact you shortly.
            </p>
          )}

          {error && (
            <p className="text-red-600 mt-2">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
