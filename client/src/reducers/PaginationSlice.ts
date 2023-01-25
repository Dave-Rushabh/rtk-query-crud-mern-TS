import { createSlice } from '@reduxjs/toolkit';

const PaginationSlice = createSlice({
  name: 'Pagination',
  initialState: {
    page: 1,
    limit: 4,
    totalAvailable: null,
  },
  reducers: {
    setPageLimit: (state, action) => {
      state.limit = action.payload;
    },
    setTotalAvailable: (state, action) => {
      state.totalAvailable = action.payload;
    },
    handlePageChange: (state, action) => {
      console.log(action.payload, 'page');
      state.page = action.payload;
    },
  },
});

export default PaginationSlice.reducer;

export const { setPageLimit, setTotalAvailable, handlePageChange } =
  PaginationSlice.actions;
