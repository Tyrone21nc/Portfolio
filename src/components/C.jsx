import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // this url below is the API endpoint and is for the backend
    const response = await fetch("http://localhost:5174/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Something went wrong and the message was not sent.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
      />

      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;