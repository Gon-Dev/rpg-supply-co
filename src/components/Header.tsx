import Link from "next/link";
import Nav from "./Nav";
import { LogoStyles, HeaderStyles } from "../styles/Header";

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <LogoStyles>
          <Link href="/">RPG Supply Co</Link>
        </LogoStyles>
      </div>

      <div>
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
