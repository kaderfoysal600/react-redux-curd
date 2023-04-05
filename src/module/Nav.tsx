import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const navLinks = [
    {
      id: 1,
      to: "/",
      value: "Dashboard",
    },
  ];
  return (
    <>
      <GlobalNavContainer>
        <nav>
          {navLinks.map((link) => {
            return (
              <NavLink
                key={link.id}
                to={link.to}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                {link.value}
              </NavLink>
            );
          })}
        </nav>
      </GlobalNavContainer>
    </>
  );
};

const GlobalNavContainer = styled.div`
  nav {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    a {
      color: #000;
      text-decoration: none;
      font-size: 18px;
      font-family: "Ubuntu", sans-serif;
      font-weight: 500;
    }
    .active {
      border-bottom: 1px solid #000;
    }
  }
`;
export default Nav;
