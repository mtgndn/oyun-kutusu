export default function CurrencySelector({ selectedCurrency, onChange }) {
  return (
    <div className="mb-4">
      <label htmlFor="currency" className="font-medium mr-2">Para Birimi:</label>
      <select
        id="currency"
        value={selectedCurrency}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white p-2 border rounded"
      >
        <option value="TRY">₺ Türk Lirası</option>
        <option value="USD">$ Dolar</option>
        <option value="EUR">€ Euro</option>
      </select>
    </div>
  );
}
