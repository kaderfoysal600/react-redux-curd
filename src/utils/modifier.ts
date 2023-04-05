import { IUSer, IUserForm } from "../module/User/User.type";

export const updateItem = (item_list:any, itemToUpdate:any) => {
  const item = item_list.find((item:any) => item.id === itemToUpdate.id);
  item_list[item_list.indexOf(item)] = itemToUpdate;
  return item_list;
};

export const addNewItem = (itemList: IUSer[], itemToAdd: IUserForm) => {
  itemList.push(itemToAdd);
  return itemList;
};

// export const deleteItem = (itemList, itemToDelete) => {
//   return itemList.filter((item) => item.id !== itemToDelete.id);
// };
