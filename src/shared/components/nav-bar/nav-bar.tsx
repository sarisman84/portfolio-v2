"use client"
import { NavbarProps } from "./nav-bar.props";

export default function Navbar({
  redirects,
  title,
}: NavbarProps) {
  return (
    <div className="flex flex-row items-center justify-center">
      <nav id="main-navigation" aria-label={title}>
        <ul role="menubar" aria-label={title} className="flex flex-row gap-5 justify-center">
          {redirects.map((redirect) => (
            <li key={redirect.href} role="none">
              <a
                href={redirect.href}
                role="menuitem"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {redirect.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
