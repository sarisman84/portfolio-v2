import Navbar from "../nav-bar/nav-bar";

export default function Topbar() {
  return (
    <div className="flex flex-row items-center justify-between gap-2 p-2">
      <header>
        <h1>Spyridon Passas</h1>
      </header>
      <Navbar
        title="Spyridon Passas"
        redirects={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Projects", href: "/projects" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <div className="flex flex-row gap-2">
        <p>SM</p>
        <p>SM</p>
        <p>SM</p>
      </div>
    </div>
  );
}
