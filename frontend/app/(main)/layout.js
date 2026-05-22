import NavbarDemo from "@/components/resizable-navbar-demo";

export default function MainLayout({ children }) {
  return (
    <>
      <NavbarDemo />
      {children}
    </>
  );
}