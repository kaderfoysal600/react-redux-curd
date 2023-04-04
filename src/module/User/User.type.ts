export interface IUSer {
  id: number;
  name: string;
  username: string;
}

export enum ApiStatus {
  "loading",
  "ideal",
  "success",
  "error",
}

export interface IUserState {
  list: IUSer[];
  status: ApiStatus;
  createUserFormState: ApiStatus;
  updateUserFormStatus: ApiStatus;
}

export const defaultList: IUSer[] = [
  {
    id: 1,
    name: "Kader Foysal",
    username: "kaderf113@gmail,com",
  },
];

export interface IUserForm {
  id: number;
  name: string;
  username: string;
}

export interface IUpdateUserActionProps {
  id: number;
  data: IUserForm;
}
