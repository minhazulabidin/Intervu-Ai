import SyncUser from "@/utils/SyncUser";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <SyncUser />
      {children}
    </>
  );
};

export default DashboardLayout;
