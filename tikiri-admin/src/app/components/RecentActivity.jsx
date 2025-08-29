export default function RecentActivity() {
  const activities = [
    { text: "Approved Little Lambs Daycare", time: "2 hours ago" },
    { text: "15 new parent registrations", time: "4 hours ago" },
    { text: "23 new bookings processed", time: "6 hours ago" },
    { text: "Sent safety update to all centers", time: "1 day ago" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ul className="space-y-2">
        {activities.map((a, i) => (
          <li key={i} className="text-sm text-gray-700">
            ✅ {a.text} <span className="text-gray-500">({a.time})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
