import React from "react";
export const metadata = {
  title: "Dashboard",
  description: "Manage your AI mock interviews and interview practice sessions.",
  robots: {
    index: false,
    follow: false,
  },
};
const DashboardLayout = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default DashboardLayout;
