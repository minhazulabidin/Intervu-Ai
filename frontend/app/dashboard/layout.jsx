import SyncUser from "@/utils/SyncUser";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <SyncUser />
      {children}
    </div>
  );
};

export default DashboardLayout;
