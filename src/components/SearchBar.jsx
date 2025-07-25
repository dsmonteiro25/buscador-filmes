export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar filme..."
      className="ghibli-search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
