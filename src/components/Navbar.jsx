import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link> | 
      <Link to="/books">Books</Link> | 
      <Link to="/cart">Cart</Link> | 
      <Link to="/login">Login</Link> | 
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;