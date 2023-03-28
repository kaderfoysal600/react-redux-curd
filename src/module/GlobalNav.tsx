import { NavLink } from "react-router-dom";

const GlobalNav = () => {
  const navLinks = [
    {
      id: 1,
      to: "/",
      value: "Dashboard",
    },
    {
      id: 2,
      to: "/add",
      value: "Add user",
    },
  ];
  return (
    <nav>
      {navLinks.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.to}
            end
          >
            {link.value}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default GlobalNav;
