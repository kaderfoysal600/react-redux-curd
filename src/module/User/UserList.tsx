import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Modal } from "../../components/modal";
import { ApiStatus, IUSer } from "./User.type";
import { deleteUserAction, getUserListAction } from "./UserSlice";
import { EditUser } from "./editUserser";

const UserList = () => {
  const [userDataToView, setUserDataToView] = useState<IUSer | null>(null);
  const { list, status } = useAppSelector((state: RootState) => state.user);
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserListAction());
  }, [dispatch]);
  return (
    <div>
      <UserListContainer>
        <div className="container">
          <table>
            <tr>
              <th>Sr. No</th>
              <th>Name</th>
              <th>UserName</th>
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
                    <td>{user.username}</td>
                    <td>
                      <div>
                        <EditUser key={user.id} user={user} />
                        <input
                          type="button"
                          value="View"
                          className="view"
                          onClick={() => {
                            setUserDataToView(user);
                          }}
                        />
                        <input
                          type="button"
                          className="delete"
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
                <label> User Name : {userDataToView.username}</label>
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
  input[type="button"] {
    text-align: center;
    cursor: pointer;
    padding: 5px 8px;
    border: none;
    color: #fff;
    border-radius: 3px;
    font-size: 16px;
  }
  .delete {
    background-color: #e65b65;
    margin-left: 5px;
  }

  .view {
    background-color: #00a82f;
  }
`;
export default UserList;
