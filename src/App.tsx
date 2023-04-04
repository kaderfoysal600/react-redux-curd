import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Layout from "./module/Layout";
import Nav from "./module/Nav";
import UserForm from "./module/User/UserForm";
import UserList from "./module/User/UserList";

function App() {
  return (
    <div>
      {/* <Layout /> */}
      <BrowserRouter>
        <ToastContainer />
        {/* <Nav /> */}
        {/* <Layout /> */}

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<UserList />}></Route>
            {/* <Route
              path="/add"
              element={<UserForm isEditForm={false} />}
            ></Route> */}
            <Route
              path="/edit/:id"
              element={<UserForm isEditForm={true} />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
