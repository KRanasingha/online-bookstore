export default function Footer() {
  const accountLinks = [
    { label: "My Account", href: "/account" },
    { label: "Login / Register", href: "/login" },
    { label: "Cart", href: "/cart" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Shop", href: "/shop" },
  ];

  const quickLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms Of Use", href: "/terms" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "https://facebook.com", icon: "f" },
    { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
    { label: "Instagram", href: "https://instagram.com", icon: "ig" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
  ];

  return (
    <footer style={{ background: "#111", color: "#fff", padding: "40px 32px 20px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "32px", marginBottom: "32px" }}>

        {/* Brand + Subscribe */}
        <div>
          <a href="/" style={{ fontSize: "18px", fontWeight: "700", color: "#fff", textDecoration: "none", display: "block", marginBottom: "10px" }}>
            Books.com
          </a>
          <p style={{ fontSize: "13px", fontWeight: "600", margin: "0 0 6px" }}>Subscribe</p>
          <p style={{ fontSize: "12px", color: "#aaa", margin: "0 0 12px" }}>Get 10% off your first order</p>
          <div style={{ display: "flex", border: "1px solid #555", borderRadius: "4px", overflow: "hidden" }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{ background: "transparent", border: "none", outline: "none", padding: "8px 10px", color: "#fff", fontSize: "12px", flex: 1 }}
            />
            <button style={{ background: "none", border: "none", color: "#fff", padding: "8px 10px", cursor: "pointer" }}>→</button>
          </div>
        </div>

        {/* Support */}
        <div>
          <p style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 14px" }}>Support</p>
          <p style={{ fontSize: "12px", color: "#aaa", margin: "0 0 8px", lineHeight: "1.6" }}>26/2A, Nugegoda,<br />Sri Lanka</p>
          <a href="mailto:books@gmail.com" style={{ display: "block", fontSize: "12px", color: "#aaa", marginBottom: "6px", textDecoration: "none" }}>books@gmail.com</a>
          <a href="tel:+94711234567" style={{ fontSize: "12px", color: "#aaa", textDecoration: "none" }}>+94 711234567</a>
        </div>

        {/* Account */}
        <div>
          <p style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 14px" }}>Account</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
            {accountLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} style={{ color: "#aaa", textDecoration: "none", fontSize: "12px" }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <p style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 14px" }}>Quick Link</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} style={{ color: "#aaa", textDecoration: "none", fontSize: "12px" }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 14px" }}>Download App</p>
          <div style={{ display: "flex", gap: "16px" }}>
            {socialLinks.map(({ label, href, icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"
                style={{ color: "#aaa", textDecoration: "none", fontSize: "13px" }}>
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div style={{ borderTop: "1px solid #333", paddingTop: "16px", textAlign: "center", fontSize: "12px", color: "#666" }}>
        © Copyright 2026. All right reserved
      </div>
    </footer>
  );
}