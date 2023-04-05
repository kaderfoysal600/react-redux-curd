import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import UserForm from "./User/UserForm";
const Layout = () => {

  return (
    <>
      <LayoutContainer>
        <div className="header">
          <div className="container">
            <h2>Welcome</h2>
          </div>
        </div>
        <UserForm isEditForm={false} />
        <Nav />
        <main>
          <Outlet />
        </main>
      </LayoutContainer>
    </>
  );
};

const LayoutContainer = styled.div`
  .header {
    background-color: #8be48b;
    h2 {
      text-align: center;
      font-family: "Ubuntu", sans-serif;
      font-size: 24px;
      line-height: 28px;
      font-weight: 600;
      padding: 10px;
    }
  }
`;
export default Layout;
