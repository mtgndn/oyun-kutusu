export default function FilterSidebar() {
  return (
    <aside className="text-black bg-white p-4 rounded-xl shadow w-full max-w-xs">
      <h2 className="text-xl font-bold mb-4">Filtrele</h2>
      <div className="mb-4">
        <label className="block font-medium">Kategori</label>
        <select className="w-full border p-2 rounded">
          <option>Aksiyon</option>
          <option>RPG</option>
          <option>Yarış</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium">Platform</label>
        <div className="space-y-1">
          <label><input type="checkbox" /> PS5</label><br />
          <label><input type="checkbox" /> PC</label>
        </div>
      </div>
    </aside>
  );
}
