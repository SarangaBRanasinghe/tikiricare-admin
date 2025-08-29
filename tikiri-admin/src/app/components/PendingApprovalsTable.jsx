export default function PendingApprovalsTable() {
  const centers = [
    { name: "Little Stars Daycare", location: "Seattle, WA", date: "2024-01-15" },
    { name: "Rainbow Kids Center", location: "Portland, OR", date: "2024-01-14" },
    { name: "Sunshine Preschool", location: "San Francisco, CA", date: "2024-01-13" },
    { name: "Happy Hearts Childcare", location: "Los Angeles, CA", date: "2024-01-12" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Pending Care Center Approvals</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">Center Name</th>
            <th className="p-2">Location</th>
            <th className="p-2">Applied Date</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {centers.map((c, i) => (
            <tr key={i} className="border-b">
              <td className="p-2">{c.name}</td>
              <td className="p-2">{c.location}</td>
              <td className="p-2">{c.date}</td>
              <td className="p-2 text-yellow-600">Pending</td>
              <td className="p-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">Approve</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
