export default function StatsCard({ title, value, change }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-gray-600">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-green-600">{change}</p>
    </div>
  );
}
