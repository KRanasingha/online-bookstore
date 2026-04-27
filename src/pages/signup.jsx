import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .signup-root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #faf9f7;
    font-family: 'DM Sans', sans-serif;
    padding: 24px;
  }

  .signup-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 960px;
    width: 100%;
    background: #fff;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 4px 40px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
  }

  .signup-left {
    position: relative;
    background: #d8e8e2;
    min-height: 540px;
    overflow: hidden;
  }

  .signup-left img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .signup-left-overlay {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.38) 0%, transparent 65%);
    padding: 32px;
  }

  .signup-left-tag {
    display: inline-block;
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(8px);
    color: #fff;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 5px 14px;
    border-radius: 100px;
    border: 1px solid rgba(255,255,255,0.3);
    margin-bottom: 10px;
  }

  .signup-left-text {
    font-family: 'Playfair Display', serif;
    color: #fff;
    font-size: 26px;
    line-height: 1.35;
    font-weight: 600;
  }

  .signup-right {
    padding: 52px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .signup-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 42px;
  }

  .signup-logo-dot {
    width: 10px;
    height: 10px;
    background: #db4444;
    border-radius: 50%;
  }

  .signup-logo-text {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-weight: 700;
    color: #1a1a1a;
    letter-spacing: 0.02em;
  }

  .signup-heading {
    font-family: 'Playfair Display', serif;
    font-size: 34px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.2;
    margin-bottom: 8px;
  }

  .signup-subtext {
    font-size: 14px;
    color: #999;
    margin-bottom: 36px;
    font-weight: 300;
  }

  .signup-fields {
    display: flex;
    flex-direction: column;
    gap: 22px;
    margin-bottom: 28px;
  }

  .signup-field {
    position: relative;
  }

  .signup-field input {
    width: 100%;
    border: none;
    border-bottom: 1.5px solid #e4e4e4;
    outline: none;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    color: #1a1a1a;
    padding: 10px 0;
    background: transparent;
    transition: border-color 0.25s;
  }

  .signup-field input::placeholder { color: #c0c0c0; font-weight: 300; }

  .signup-field-bar {
    position: absolute;
    bottom: 0; left: 0;
    height: 1.5px;
    width: 0;
    background: #db4444;
    transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
    border-radius: 2px;
  }

  .signup-field input:focus ~ .signup-field-bar { width: 100%; }

  .btn-primary {
    width: 100%;
    background: #db4444;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 15px;
    font-size: 15px;
    font-weight: 600;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    letter-spacing: 0.03em;
    transition: background 0.2s, transform 0.12s;
    margin-bottom: 12px;
  }

  .btn-primary:hover { background: #c43535; }
  .btn-primary:active { transform: scale(0.985); }

  .btn-google {
    width: 100%;
    background: #fff;
    color: #2c2c2c;
    border: 1.5px solid #ebebeb;
    border-radius: 10px;
    padding: 13px;
    font-size: 14px;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: background 0.2s, border-color 0.2s, transform 0.12s;
    margin-bottom: 26px;
  }

  .btn-google:hover { background: #fafafa; border-color: #d0d0d0; }
  .btn-google:active { transform: scale(0.985); }

  .signup-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    color: #d4d4d4;
    font-size: 12px;
  }

  .signup-divider::before,
  .signup-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #efefef;
  }

  .signup-login {
    text-align: center;
    font-size: 13.5px;
    color: #aaa;
  }

  .signup-login .login-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: #1a1a1a;
    font-weight: 600;
    font-size: 13.5px;
    font-family: 'DM Sans', sans-serif;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: #db4444;
    transition: color 0.2s;
  }

  .signup-login .login-btn:hover { color: #db4444; }

  @media (max-width: 720px) {
    .signup-card {
      grid-template-columns: 1fr;
      border-radius: 20px;
    }
    .signup-left {
      min-height: 200px;
    }
    .signup-left-text { font-size: 22px; }
    .signup-right { padding: 36px 32px; }
    .signup-logo { margin-bottom: 28px; }
    .signup-heading { font-size: 28px; }
    .signup-subtext { margin-bottom: 28px; }
  }

  @media (max-width: 400px) {
    .signup-root { padding: 10px; }
    .signup-right { padding: 28px 20px; }
    .signup-heading { font-size: 24px; }
  }
`;

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => alert("Account created!");

  return (
    <>
      <style>{style}</style>
      <div className="signup-root">
        <div className="signup-card">

          {/* Left — image panel */}
          <div className="signup-left">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop"
              alt="Books"
            />
            <div className="signup-left-overlay">
              <div className="signup-left-tag">Bookstore</div>
              <div className="signup-left-text">Your next great<br/>read awaits.</div>
            </div>
          </div>

          {/* Right — form */}
          <div className="signup-right">
            <div className="signup-logo">
              <div className="signup-logo-dot" />
              <span className="signup-logo-text">Books.com</span>
            </div>

            <h1 className="signup-heading">Create an account</h1>
            <p className="signup-subtext">Enter your details below</p>

            <div className="signup-fields">
              <div className="signup-field">
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
                <div className="signup-field-bar" />
              </div>
              <div className="signup-field">
                <input type="text" name="email" placeholder="Email or Phone Number" value={form.email} onChange={handleChange} />
                <div className="signup-field-bar" />
              </div>
              <div className="signup-field">
                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
                <div className="signup-field-bar" />
              </div>
            </div>

            <button className="btn-primary" onClick={handleSubmit}>Create Account</button>

            <div className="signup-divider">or</div>

            <button className="btn-google">
              <GoogleIcon />
              Sign up with Google
            </button>

            <p className="signup-login">
              Already have an account?{" "}
              <button className="login-btn" onClick={() => navigate("/login")}>
                Log in
              </button>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}