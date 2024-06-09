import { createSlice } from "@reduxjs/toolkit";
import { Action } from "../action";
import { CommonEntity } from "@models";
import { Slice } from "../slice";
import { useAppDispatch } from "@store";

const name = "Home";
const action = new Action<Home>(name);
export const dataSlice = createSlice(new Slice<Home>(action));
export const DataFacade = () => {
  const dispatch = useAppDispatch;
};

export class Home extends CommonEntity {
  constructor(public name?: string) {
    super();
  }
}
