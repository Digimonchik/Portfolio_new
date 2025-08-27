import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const API_KEY = "RSWr8bOd94FA1CdAWncLiQH7DoKgiVD4";
// const BASE_URL = "https://api.giphy.com/v1/gifs";

// Асинхронный экшен для получения гифок
const fetchFilms = createAsyncThunk(
  "films/fetchFilms",
  async (searchValue, thunkAPI) => {
    try {
      const response = await fetch(
        `${BASE_URL}/search?api_key=${API_KEY}&q=${searchValue}&limit=30&offset=1`
      );

      if (!response.ok) {
        throw new Error("Access error");
      }

      const data = await response.json();
      console.log(data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const cinemaSlice = createSlice({
  name: "films",
  initialState: {
    films: [],
    status: "idle",
    error: null,
  },

  reducers: {
    removefilms(state) {
      state.films = [];
      state.status = "idle";
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.gifs = action.payload;
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { removeFilms } = cinemaSlice.actions;
export { fetchFilms };
export default cinemaSlice.reducer;
