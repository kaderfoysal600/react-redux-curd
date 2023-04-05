import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Input } from "../../components/input";
import { toastError } from "../../components/ToastifyConfig";
import { ApiStatus, IUserForm } from "./User.type";
import { createUserAction, resetCreateListStatus } from "./UserSlice";

interface Iprops {
  isEditForm: boolean;
}

const UserForm = (props: Iprops) => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [id, setId] = useState(1);

  const params = useParams();

  const { list } = useAppSelector((state: RootState) => state.user);

  const { createUserFormState, updateUserFormStatus } = useAppSelector(
    (state: RootState) => state.user
  );

  const dispatch = useAppDispatch();
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const data: IUserForm = { name, username, id };
    if (name && username) {
      const data1 = {
        ...data,
      };
      dispatch(createUserAction(data1));
    } else {
      toastError("please fill the required filled");
    }
  };

  useEffect(() => {
    if (createUserFormState === ApiStatus.success) {
      setName("");
      setUserName("");
      dispatch(resetCreateListStatus());
    }
  }, [createUserFormState]);
  return (
    <UserFormContainer>
      <div className="container">
        <form onSubmit={onSubmitForm}>
          <Input
            label="Name"
            value={name}
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />
          <Input
            label="username"
            value={username}
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setUserName(e.target.value);
            }}
          />
          <button
            type="submit"
            className="create"
            disabled={createUserFormState === ApiStatus.loading}
          >
            Create
          </button>
        </form>
      </div>
    </UserFormContainer>
  );
};

const UserFormContainer = styled.div`
  form {
    max-width: 300px;
    margin: auto;
    input {
      padding: 3px 5px;
      font-size: 15px;
      margin-bottom: 5px;
    }
    button {
      cursor: pointer;
    }
  }
  .elm {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .create {
    text-align: center;
    cursor: pointer;
    padding: 5px 8px;
    border: none;
    color: #fff;
    border-radius: 3px;
    font-size: 16px;
    background-color: #B35AC5;
  }
`;
export default UserForm;
