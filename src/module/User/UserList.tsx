import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Modal } from "../../components/modal";
import { ApiStatus, IUSer } from "./User.type";
import { deleteUserAction, getUserListAction } from "./UserSlice";

const UserList = () => {
  const [userDataToView, setUserDataToView] = useState<IUSer | null>(null);
  const { list, status } = useAppSelector((state: RootState) => state.user);
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserListAction());
  }, []);
  return (
    <div>
      <UserListContainer>
        <div className="container">
          <table>
            <tr>
              <th>Sr. No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>

            {status === ApiStatus.loading && <tbody>Data is loading</tbody>}
            {status === ApiStatus.error && <tbody>Something went wrong</tbody>}
            {status === ApiStatus.ideal &&
              list.map((user: IUSer, index: number) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <div>
                        <input
                          type="button"
                          value="Edit"
                          onClick={() => {
                            navigator(`/edit/${user.id}`);
                          }}
                        />
                        <input
                          type="button"
                          value="View"
                          onClick={() => {
                            setUserDataToView(user);
                          }}
                        />
                        <input
                          type="button"
                          value="Delete"
                          onClick={() => {
                            dispatch(deleteUserAction(user.id));
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>

        {userDataToView && (
          <Modal
            title="User Details"
            onClose={() => {
              setUserDataToView(null);
            }}
          >
            <div>
              <div>
                <label> Name : {userDataToView.name}</label>
              </div>
              <div>
                <label> Email : {userDataToView.email}</label>
              </div>
            </div>
          </Modal>
        )}
      </UserListContainer>
    </div>
  );
};

const UserListContainer = styled.div`
  table {
    margin-top: 30px;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;
export default UserList;
