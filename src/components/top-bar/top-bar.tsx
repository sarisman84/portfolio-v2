import Navbar from "../../shared/components/nav-bar/nav-bar";

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
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          SM
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          SM
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          SM
        </a>
      </div>
    </div>
  );
}
