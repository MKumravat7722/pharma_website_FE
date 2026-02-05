import { useState } from "react";
import { submitContact } from "../../api/pages";

const Contact = ({ data }) => {
  const { address, phone, email } = data.content;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await submitContact({
        ...form,
        submission_type: "contact"
      });

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left: Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Get in Touch ☕
          </h2>

          <p className="text-gray-300 mb-4">
            We'd love to hear from you. Visit us or drop a message!
          </p>

          <div className="space-y-3 text-lg">
            <p><span className="font-semibold">📍 Address:</span> {address}</p>
            <p><span className="font-semibold">📞 Phone:</span> {phone}</p>
            <p><span className="font-semibold">✉ Email:</span> {email}</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white text-gray-900 p-8 rounded-xl shadow-lg space-y-4"
        >
          <h3 className="text-2xl font-bold mb-4">
            Send us a message
          </h3>

          {success && (
            <p className="text-green-600 font-medium">
              Message sent successfully!
            </p>
          )}

          {error && (
            <p className="text-red-600 font-medium">
              {error}
            </p>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone (optional)"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
