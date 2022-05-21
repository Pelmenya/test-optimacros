import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { pagesAPI } from '../../../api/pages-api';
import { PagesType } from '../../../utils/types/pages';
import { LoadingType } from '../../../utils/types/loading';
import { joinData } from '../../../utils/functions/joinData';

export interface PagesStateType extends PagesType, LoadingType {}

const initialPagesState = {
  loading: 'idle',
  pages: [],
} as PagesStateType;

export const fetchPages = createAsyncThunk('pages/fetchPages', async () => {
  try {
    const response = await pagesAPI.getPages();
    const file = await response.files['view.json'];
    const content = await JSON.parse(file.content);
    return joinData(content.entityLabelPages[0]);
  } catch (err) {
    return Promise.reject(err);
  }
});

const pagesSlice = createSlice({
  name: 'pages',
  initialState: initialPagesState,
  reducers: {
    updatePages: (state, action) => {
      state.pages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPages.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchPages.fulfilled, (state, action) => {
      state.pages = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(fetchPages.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { updatePages } = pagesSlice.actions;
export const pagesReducer = pagesSlice.reducer;
