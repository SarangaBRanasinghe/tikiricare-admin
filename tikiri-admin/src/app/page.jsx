import StatsCard from "./components/StatsCard";
import QuickActions from "./components/QuickActions";
import RecentActivity from "./components/RecentActivity";
import PendingApprovalsTable from "./components/PendingApprovalsTable";

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="text-gray-600">Monitor and manage your childcare platform</p>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard title="Active Parents" value="2,847" change="+12.5% from last month" />
        <StatsCard title="Care Centers" value="156" change="+8.2% from last month" />
        <StatsCard title="Pending Approvals" value="12" change="+3 from last month" />
        <StatsCard title="New Registrations" value="89" change="+23.1% from last month" />
      </div>

      {/* Revenue Chart Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Revenue & Bookings</h2>
        <div className="h-40 flex items-center justify-center text-gray-400">
          Revenue Chart Placeholder
        </div>
      </div>

      {/* Quick Actions + Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QuickActions />
        <RecentActivity />
      </div>

      {/* Pending Approvals Table */}
      <PendingApprovalsTable />
    </div>
  );
}
