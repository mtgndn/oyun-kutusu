import '../styles/globals.css';
// components/FilterSidebar.tsx
import React from 'react';

export default function FilterSidebar({ filters, setFilters }) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-5">
      <h2 className="text-xl font-semibold text-gray-800">Filtrele</h2>

      {/* Kategori */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
        <select
          name="category"
          id="category"
          value={filters.category}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="">Hepsi</option>
          <option value="Aksiyon">Aksiyon</option>
          <option value="RPG">RPG</option>
          <option value="Spor">Spor</option>
          <option value="Yarış">Yarış</option>
          <option value="Macera">Macera</option>
        </select>
      </div>

      {/* Platform */}
      <div>
        <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
        <select
          name="platform"
          id="platform"
          value={filters.platform}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="">Hepsi</option>
          <option value="PC">PC</option>
          <option value="PS5">PS5</option>
        </select>
      </div>

      {/* Dil */}
      <div>
        <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">Dil</label>
        <select
          name="language"
          id="language"
          value={filters.language || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="">Hepsi</option>
          <option value="Türkçe">Türkçe</option>
          <option value="İngilizce">İngilizce</option>
        </select>
      </div>

      {/* Fiyat Aralığı */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Fiyat Aralığı (₺)</label>
        <div className="flex gap-2">
          <input
            type="number"
            name="minPrice"
            placeholder="Min"
            value={filters.minPrice || ''}
            onChange={handleChange}
            className="w-1/2 border border-gray-300 rounded-md px-3 py-2"
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max"
            value={filters.maxPrice || ''}
            onChange={handleChange}
            className="w-1/2 border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
      </div>
    </div>
  );
}
