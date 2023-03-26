export interface IUSer {
  id: number;
  title: string;
  body: string;
  userId: number;
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
    title: "Kader Foysal",
    body: "kaderf113@gmail,com",
    userId:1
  },
];

export interface IUserForm {
  title: string;
  body: string;
}

export interface IUpdateUserActionProps {
  id: number;
  data: IUserForm;
}
