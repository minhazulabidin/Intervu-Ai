import { useIntro } from "@/components/intro/IntroProvider";
import NavbarDemo from "@/components/resizable-navbar-demo";

export default function MainLayout({ children }) {

  return (
    <>
      <NavbarDemo />
      <main>{children}</main>
    </>
  );
}