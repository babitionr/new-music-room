import { createSlice } from "@reduxjs/toolkit";

const name = 'Data' ;
const action = new Action<Data>(name);
export const dataSlice = createSlice(new Slice<Data>(action));
export const DataFacade = () => {
    
}