export default function Navbar() {
  return (
    <>
      {/* Announcement Bar */}
      <div style={{
        backgroundColor: "#111", color: "#fff", padding: "9px 24px",
        fontSize: "13px", display: "flex", alignItems: "center",
        justifyContent: "center", gap: "8px", position: "relative",
      }}>
        <span>Black Friday Sale For All Books And Free Express Delivery – OFF 50%!</span>
        <a href="/shop" style={{ color: "#fff", fontWeight: "700", textDecoration: "underline" }}>ShopNow</a>
        <button style={{ marginLeft: "auto",position: "absolute", right: "24px", display: "flex", alignItems: "center", gap: "4px", cursor: "pointer", background: "none", border: "none", color: "#fff", fontSize: "13px" }}>
         English ▾
        </button>
      </div>

      {/* Main Nav */}
      <nav style={{
        backgroundColor: "#fff", padding: "14px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: "1px solid #eee", gap: "16px",
        position: "sticky", top: 0, zIndex: 1000,
      }}>
        <a href="/" style={{ fontSize: "20px", fontWeight: "700", color: "#111", textDecoration: "none" }}>
          Books.com
        </a>

        <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: "28px", alignItems: "center" }}>
          <li><a href="/" style={{ textDecoration: "none", color: "#111", fontSize: "14px" }}>Home</a></li>
          <li><a href="/contact" style={{ textDecoration: "none", color: "#111", fontSize: "14px" }}>Contact</a></li>
          <li><a href="/about" style={{ textDecoration: "none", color: "#111", fontSize: "14px" }}>About</a></li>
          <li><a href="/signup" style={{ textDecoration: "underline", color: "#111", fontSize: "14px", fontWeight: "500" }}>Sign Up</a></li>
        </ul>

        <div style={{
          display: "flex", alignItems: "center", background: "#f5f5f5",
          border: "1px solid #ddd", borderRadius: "4px", overflow: "hidden",
        }}>
          <input
            type="text"
            placeholder="What are you looking for?"
            style={{ border: "none", outline: "none", background: "transparent", padding: "8px 12px", fontSize: "13px", width: "200px" }}
          />
          <button style={{ background: "none", border: "none", padding: "8px 10px", cursor: "pointer", fontSize: "15px" }}>⌕</button>
        </div>
      </nav>
    </>
  );
}