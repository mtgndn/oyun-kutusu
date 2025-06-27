import '../styles/globals.css';

export default function FilterSidebar({ filters, setFilters }) {
  return (
    <aside className="bg-white p-4 rounded-xl shadow w-full max-w-xs">
      <h2 className="text-xl font-bold mb-4">Filtrele</h2>
      <div className="mb-4">
        <label className="block font-medium">Kategori</label>
        <select
          value={filters.category}
          onChange={e => setFilters({ ...filters, category: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">Tümü</option>
          <option value="Aksiyon">Aksiyon</option>
          <option value="RPG">RPG</option>
          <option value="Yarış">Yarış</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium">Platform</label>
        <div className="space-y-1">
          <label>
            <input
              type="radio"
              name="platform"
              value=""
              checked={filters.platform === ''}
              onChange={() => setFilters({ ...filters, platform: '' })}
            /> Tümü
          </label>
          <label>
            <input
              type="radio"
              name="platform"
              value="PS5"
              checked={filters.platform === 'PS5'}
              onChange={e => setFilters({ ...filters, platform: e.target.value })}
            /> PS5
          </label>
          <label>
            <input
              type="radio"
              name="platform"
              value="PC"
              checked={filters.platform === 'PC'}
              onChange={e => setFilters({ ...filters, platform: e.target.value })}
            /> PC
          </label>
        </div>
      </div>
    </aside>
  );
}
