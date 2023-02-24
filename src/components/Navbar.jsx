import { NavbarBalance } from "./NavbarBalance";

export const Navbar = () => {
  return (
    <nav>
      <div className="logo">PayBank</div>
      <div>
        <NavbarBalance />
      </div>
    </nav>
  );
};
