
import { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      // Example API endpoint (replace with your backend URL)
      const response = await axios.post("https://your-backend-url.com/api/contact", formData);

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send the message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
      Contact Us
      </h2>
      {isSubmitted && <p style={{ color: "green" }}>Form submitted successfully!</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ display: "block", width: "100%", padding: "8px", minHeight: "100px" }}
          ></textarea>
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>

        <button
          type="submit"
          style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
