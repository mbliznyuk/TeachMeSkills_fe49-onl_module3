import { createSlice } from '@reduxjs/toolkit';

const TabsSlice = createSlice({
  name: 'TabsSlice',
  initialState: {
    activeTab: 'all',
  },
  reducers: {
    setActiveTab(state, action: { payload: string }) {
      state.activeTab = action.payload;
    },
  },
});

export const {
  actions: { setActiveTab },
  reducer: TabsSliceReducer,
} = TabsSlice;
