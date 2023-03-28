export interface IUSer {
  id: number;
  name: string;
  email: string;
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
    email: "kaderf113@gmail,com",
  },
  {
    id: 2,
    name: " Foysal",
    email: "kaderf113@gmail,com",
  },
];

export interface IUserForm {
  name: string;
  email: string;
}

export interface IUpdateUserActionProps {
  id: number;
  data: IUserForm;
}
