export default function QuickActions() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-semibold mb-4">Quick Actions</h2>
      <div className="space-y-2">
        <button className="w-full py-2 border rounded">Approve All Pending</button>
        <button className="w-full py-2 border rounded">Suspend Account</button>
        <button className="w-full py-2 border rounded">Send Announcement</button>
        <button className="w-full py-2 border rounded">Generate Report</button>
      </div>
    </div>
  );
}
