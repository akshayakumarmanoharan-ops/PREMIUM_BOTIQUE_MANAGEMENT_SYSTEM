export default function SearchBar({ setQuery }) {
  return (
    <input
      className="search"
      placeholder="Search products..."
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
