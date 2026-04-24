import React, { useState } from "react";

export default function MyAccount() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
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
      {/* CSS inside same file */}
      <style>{`
        body {
          background-color: #f9fafb;
          font-family: Arial, sans-serif;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
        }

        .breadcrumb {
          color: #777;
        }

        .breadcrumb span {
          color: #000;
          font-weight: 500;
        }

        .welcome span {
          color: red;
          font-weight: bold;
        }

        .main-grid {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 30px;
        }

        .sidebar {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #ddd;
        }

        .sidebar h3 {
          margin-bottom: 10px;
        }

        .sidebar ul {
          list-style: none;
          padding: 0;
          margin-bottom: 20px;
        }

        .sidebar li {
          margin: 5px 0;
          color: #666;
          cursor: pointer;
        }

        .sidebar li:hover {
          color: red;
        }

        .sidebar .active {
          color: red;
          font-weight: bold;
        }

        .form-section {
          background: #fff;
          padding: 30px;
          border-radius: 10px;
          border: 1px solid #ddd;
        }

        .form-section h2 {
          color: red;
          margin-bottom: 20px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color: #555;
        }

        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        input:focus {
          outline: none;
          border-color: red;
        }

        .form-section h3 {
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .buttons {
          display: flex;
          justify-content: flex-end;
          gap: 15px;
          margin-top: 20px;
        }

        .cancel {
          background: none;
          border: none;
          color: #777;
          cursor: pointer;
        }

        .cancel:hover {
          color: #000;
        }

        .save {
          background: red;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }

        .save:hover {
          background: darkred;
        }

        @media (max-width: 768px) {
          .main-grid {
            grid-template-columns: 1fr;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="breadcrumb">
            Home / <span>My Account</span>
          </div>
          <div className="welcome">
            Welcome! <span></span>
          </div>
        </div>

        <div className="main-grid">
          {/* Sidebar */}
          <div className="sidebar">
            <h3>Manage My Account</h3>
            <ul>
              <li className="active">My Profile</li>
              <li>Address Book</li>
              <li>Payment Options</li>
            </ul>

            <h3>My Orders</h3>
            <ul>
              <li>Returns</li>
              <li>Cancellations</li>
            </ul>

            <h3>My Wishlist</h3>
          </div>

          {/* Form */}
          <div className="foelrm-section">
            <h2>Edit Your Profile</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid">
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </div>

                <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="grid">
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Street, City"
                  />
                </div>
              </div>

              <h3>Password Changes</h3>

              <input
                type="password"
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                placeholder="Current Password"
              />
              

              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                placeholder="New Password"
              />

              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm New Password"
              />

              <div className="buttons">
                <button type="button" className="cancel">
                  Cancel
                </button>

                <button type="submit" className="save">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}