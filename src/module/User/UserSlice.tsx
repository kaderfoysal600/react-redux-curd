import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toastError, toastSuccess } from "../../components/ToastifyConfig";
import { addNewItem, updateItem } from "../../utils/modifier";
import {
  ApiStatus,
  IUSer,
  IUpdateUserActionProps,
  IUserForm,
  IUserState,
} from "./User.type";
import {
  createUser,
  deleteUserApi,
  getUserList,
  updateUserApi,
} from "./UserService";

const initialState: IUserState = {
  list: [],
  status: ApiStatus.ideal,
  createUserFormState: ApiStatus.ideal,
  updateUserFormStatus: ApiStatus.ideal,
};

export const getUserListAction = createAsyncThunk(
  "user/getUserListAction",
  async () => {
    const response = await getUserList();
    return response.data;
  }
);

export const createUserAction = createAsyncThunk(
  "user/createUserAction",
  async (data: IUserForm) => {
    const response = await createUser(data);
    console.log(response.data);
    return response.data;
  }
);

export const deleteUserAction = createAsyncThunk(
  "user/deleteUserAction",
  async (id: number) => {
    await deleteUserApi(id);
    return id;
  }
);

export const updateUserAction = createAsyncThunk(
  "user/updateUserAction",
  async (user: any) => {
    const response = await updateUserApi(user);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetCreateListStatus: (state) => {
      state.createUserFormState = ApiStatus.ideal;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserListAction.pending, (state) => {
      state.status = ApiStatus.loading;
    });
    builder.addCase(getUserListAction.fulfilled, (state, action) => {
      state.status = ApiStatus.ideal;
      state.list = action.payload;
    });
    builder.addCase(getUserListAction.rejected, (state, action) => {
      state.status = ApiStatus.error;
    });

    builder.addCase(createUserAction.pending, (state) => {
      state.createUserFormState = ApiStatus.loading;
    });
    builder.addCase(createUserAction.fulfilled, (state, action) => {
      state.createUserFormState = ApiStatus.success;
      state.list = addNewItem(state.list, action.payload);
      toastSuccess("User created");
    });
    builder.addCase(createUserAction.rejected, (state) => {
      state.createUserFormState = ApiStatus.error;
    });

    builder.addCase(deleteUserAction.fulfilled, (state, action) => {
      const newList = state.list.filter((x) => x.id !== action.payload);
      state.list = newList;
      toastSuccess("User deleted");
    });
    builder.addCase(updateUserAction.pending, (state) => {
      state.updateUserFormStatus = ApiStatus.loading;
    });
    builder.addCase(updateUserAction.fulfilled, (state, action) => {
      state.updateUserFormStatus = ApiStatus.ideal;
      state.list = updateItem(state.list, action.payload);
      toastSuccess("User updated");
    });
    builder.addCase(updateUserAction.rejected, (state) => {
      state.updateUserFormStatus = ApiStatus.error;
      toastError("Error while updating user");
    });
  },
});

export default userSlice.reducer;

export const { resetCreateListStatus } = userSlice.actions;
