import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background-color: #f9fafb;
          font-family: Arial, sans-serif;
        }

        .contact-container {
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px;
        }

        .breadcrumb {
          font-size: 14px;
          color: #777;
          margin-bottom: 40px;
        }

        .breadcrumb a {
          color: #000;
          font-weight: 500;
          text-decoration: none;
        }

        .breadcrumb a:hover {
          color: #db4444;
          text-decoration: underline;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 24px;
          align-items: start;
        }

        /* ---- Info Card ---- */
        .info-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          padding: 32px 28px;
        }

        .info-block {
          padding-bottom: 28px;
          margin-bottom: 28px;
          border-bottom: 1px solid #e8e8e8;
        }

        .info-block:last-child {
          padding-bottom: 0;
          margin-bottom: 0;
          border-bottom: none;
        }

        .info-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .icon-circle {
          width: 40px;
          height: 40px;
          background: #db4444;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-circle svg {
          width: 18px;
          height: 18px;
          stroke: #fff;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .info-header h3 {
          font-size: 16px;
          font-weight: 600;
          color: #111;
        }

        .info-block p {
          font-size: 14px;
          color: #555;
          line-height: 1.7;
          margin-bottom: 6px;
        }

        .info-block p:last-child {
          margin-bottom: 0;
        }

        /* ---- Form Card ---- */
        .form-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          padding: 32px 28px;
        }

        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .contact-input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          font-size: 14px;
          color: #333;
          background: #f9f9f9;
          transition: border-color 0.2s, background 0.2s;
        }

        .contact-input::placeholder {
          color: #aaa;
        }

        .contact-input:focus {
          outline: none;
          border-color: #db4444;
          background: #fff;
        }

        .contact-textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          font-size: 14px;
          color: #333;
          background: #f9f9f9;
          resize: vertical;
          min-height: 160px;
          font-family: Arial, sans-serif;
          transition: border-color 0.2s, background 0.2s;
          margin-bottom: 20px;
        }

        .contact-textarea::placeholder {
          color: #aaa;
        }

        .contact-textarea:focus {
          outline: none;
          border-color: #db4444;
          background: #fff;
        }

        .form-footer {
          display: flex;
          justify-content: flex-end;
        }

        .send-btn {
          background: #db4444;
          color: #fff;
          border: none;
          padding: 14px 36px;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
        }

        .send-btn:hover {
          background: #c03333;
        }

        .send-btn:active {
          transform: scale(0.98);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .input-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="contact-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          Home / <Link to="/contact">Contact</Link>
        </div>

        <div className="contact-grid">
          {/* Info Card */}
          <div className="info-card">

            {/* Call To Us */}
            <div className="info-block">
              <div className="info-header">
                <div className="icon-circle">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3>Call To Us</h3>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +94 711234567</p>
            </div>

            {/* Write To Us */}
            <div className="info-block">
              <div className="info-header">
                <div className="icon-circle">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3>Write To Us</h3>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: books@gmail.com</p>
            </div>

          </div>

          {/* Form Card */}
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="input-row">
                <input
                  className="contact-input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                />
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                />
                <input
                  className="contact-input"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your Phone *"
                />
              </div>

              <textarea
                className="contact-textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
              />

              <div className="form-footer">
                <button type="submit" className="send-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}