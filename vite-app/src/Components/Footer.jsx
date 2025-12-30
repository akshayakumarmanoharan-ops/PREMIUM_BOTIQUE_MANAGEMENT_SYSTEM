export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Premium Boutique Inventory System
      </p>
      <p className="footer-sub">
        Built with React
      </p>
    </footer>
  );
}
