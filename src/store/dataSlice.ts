import { createSlice } from '@reduxjs/toolkit';

const data = {
  test: 'test'
};

type TinitialState = {
  data: typeof data;
};

const initialState: TinitialState = {
  data
};

const dataSlice = createSlice({
  name: 'data',
  initialState,

  reducers: {}
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
