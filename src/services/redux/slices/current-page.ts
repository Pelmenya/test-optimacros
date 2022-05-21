import { createSlice } from '@reduxjs/toolkit';
import { PageType } from '../../../utils/types/page';

export interface CurrentPageStateType {
  isOpen: boolean;
  page?: PageType;
}

const initialCurrentPageState = {
  isOpen: false,
} as CurrentPageStateType;

const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: initialCurrentPageState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.page = action.payload;
      state.isOpen = true;
    },
    resetCurrentPage: (state) => {
      state.isOpen = false;
      state.page = undefined;
    },
  },
});

export const { setCurrentPage, resetCurrentPage } = currentPageSlice.actions;
export const currentPageReducer = currentPageSlice.reducer;
