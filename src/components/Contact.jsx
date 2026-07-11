import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus({ type: "", text: "" });

    const formData = new FormData(formRef.current);

    // Web3Forms Access Key
    formData.append("access_key", "d609c62b-2642-45ba-83c9-d7d676c54f8e");

    // Email Subject
    formData.append("subject", "New Portfolio Contact Message");

    // Optional
    formData.append("from_name", form.name);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          text: "✅ Message sent successfully!",
        });

        setForm({
          name: "",
          email: "",
          msg: "",
        });

        formRef.current.reset();
      } else {
        setStatus({
          type: "error",
          text: "❌ Failed to send message.",
        });
      }
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        text: "❌ Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          ref={formRef}
          className="form"
          onSubmit={handleFormSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={onChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={onChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.msg}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                msg: e.target.value,
              }))
            }
            required
          />

          {status.text && (
            <p className={`form-status ${status.type}`}>
              {status.text}
            </p>
          )}

          <button type="submit" className="btn" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}