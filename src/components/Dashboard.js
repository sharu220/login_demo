import React from "react";
import {
  Card,
  Typography,
  CardBody,
  CardHeader,
  Chip,
} from "@material-tailwind/react";
import {
  CurrencyDollarIcon,
  UsersIcon,
  ShoppingCartIcon,
  PresentationChartBarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";

// Stats Card Component
function StatsCard({ title, value, change, icon: Icon, trend }) {
  const isPositive = trend === "up";

  return (
    <Card className="shadow-sm w-full">
      <CardBody>
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="small" className="text-blue-gray-600">
              {title}
            </Typography>

            <Typography
              variant="h4"
              color="blue-gray"
              className="mt-1 text-xl md:text-2xl"
            >
              {value}
            </Typography>

            <div className="flex items-center gap-1 mt-2">
              {isPositive ? (
                <ArrowUpIcon className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownIcon className="h-4 w-4 text-red-500" />
              )}

              <Typography
                variant="small"
                className={isPositive ? "text-green-500" : "text-red-500"}
              >
                {change}
              </Typography>
            </div>
          </div>

          <div className="p-3 bg-blue-gray-50 rounded-full">
            <Icon className="h-6 w-6 text-blue-gray-600" />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

// Dashboard Component
function Dashboard() {
  const statsData = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+12.5%",
      trend: "up",
      icon: CurrencyDollarIcon,
    },
    {
      title: "Total Users",
      value: "2,456",
      change: "+8.2%",
      trend: "up",
      icon: UsersIcon,
    },
    {
      title: "Total Orders",
      value: "1,234",
      change: "-3.1%",
      trend: "down",
      icon: ShoppingCartIcon,
    },
    {
      title: "Active Sessions",
      value: "892",
      change: "+15.3%",
      trend: "up",
      icon: PresentationChartBarIcon,
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-001",
      customer: "John Doe",
      amount: "$125.00",
      status: "Completed",
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith",
      amount: "$89.99",
      status: "Pending",
    },
    {
      id: "#ORD-003",
      customer: "Bob Johnson",
      amount: "$256.50",
      status: "Processing",
    },
    {
      id: "#ORD-004",
      customer: "Alice Brown",
      amount: "$432.00",
      status: "Completed",
    },
    {
      id: "#ORD-005",
      customer: "Charlie Wilson",
      amount: "$178.25",
      status: "Completed",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "green";
      case "Pending":
        return "amber";
      case "Processing":
        return "blue";
      default:
        return "gray";
    }
  };

  return (
    <div className="w-full">
      {/* Margin top for mobile because sidebar header covers screen */}
      <div className="p-4 md:p-8 bg-blue-gray-50 min-h-screen mt-14 md:mt-0">
        {/* Header */}
        <div className="mb-6">
          <Typography
            variant="h3"
            color="blue-gray"
            className="text-2xl md:text-3xl"
          >
            Dashboard
          </Typography>
          <Typography variant="small" className="text-blue-gray-600 mt-1">
            Welcome back! Here's what's happening today.
          </Typography>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Recent Orders Table */}
        <Card className="shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            className="rounded-none px-4 py-4"
          >
            <Typography variant="h5" color="blue-gray">
              Recent Orders
            </Typography>
            <Typography variant="small" className="text-blue-gray-600">
              Latest transactions from your store
            </Typography>
          </CardHeader>

          {/* Make table scrollable on mobile */}
          <CardBody className="overflow-x-auto px-0">
            <table className="w-full min-w-[600px] table-auto text-left">
              <thead>
                <tr>
                  <th className="border-y bg-blue-gray-50/50 p-4">
                    <Typography variant="small" className="opacity-70">
                      Order ID
                    </Typography>
                  </th>
                  <th className="border-y bg-blue-gray-50/50 p-4">
                    <Typography variant="small" className="opacity-70">
                      Customer
                    </Typography>
                  </th>
                  <th className="border-y bg-blue-gray-50/50 p-4">
                    <Typography variant="small" className="opacity-70">
                      Amount
                    </Typography>
                  </th>
                  <th className="border-y bg-blue-gray-50/50 p-4">
                    <Typography variant="small" className="opacity-70">
                      Status
                    </Typography>
                  </th>
                </tr>
              </thead>

              <tbody>
                {recentOrders.map((order, i) => (
                  <tr key={order.id}>
                    <td className="p-4 border-b">{order.id}</td>
                    <td className="p-4 border-b">{order.customer}</td>
                    <td className="p-4 border-b font-semibold">
                      {order.amount}
                    </td>
                    <td className="p-4 border-b">
                      <Chip
                        value={order.status}
                        color={getStatusColor(order.status)}
                        size="sm"
                        variant="ghost"
                        className="w-fit"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
