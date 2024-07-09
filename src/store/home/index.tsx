import { createSlice } from "@reduxjs/toolkit";
import { Action } from "../action";
import { CommonEntity, PaginationQuery } from "@models";
import { Slice, State } from "../slice";
import { useAppDispatch, useTypedSelector } from "@store";

const name = "Home";
const action = new Action<Home>(name);
export const homeSlice = createSlice(new Slice<Home>(action));
export const HomeFacade = () => {
  const dispatch = useAppDispatch();
  return {
    ...useTypedSelector((state) => state[action.name] as State<Home>),
    getHome: (params: PaginationQuery<Home>) =>
      dispatch(action.getHome(params)),
    getSong: ({ id }: { id: string }) => dispatch(action.getSong({ id })),
  };
};

export class Home extends CommonEntity {
  constructor(public name?: string) {
    super();
  }
}
