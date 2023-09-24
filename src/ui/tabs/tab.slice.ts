import { createSlice } from '@reduxjs/toolkit';

export const ALL_TABS_KEY = 'all';
export const FAVOURITES_TABS_KEY = 'favorites';
export const POPULAR_TABS_KEY = 'popular';

const TabsSlice = createSlice({
  name: 'TabsSlice',
  initialState: {
    activeTab: ALL_TABS_KEY,
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
