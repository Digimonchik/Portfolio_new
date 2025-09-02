import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchFilms = createAsyncThunk("films/fetchFilms", async (_, thunkAPI) => {
  const token = process.env.REACT_APP_TMDB_TOKEN;
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Access error");
    }

    const data = await response.json();
    console.log(data);
    return data.results; // TMDB кладёт список фильмов в results
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const cinemaSlice = createSlice({
  name: "films",
  initialState: {
    films: [],
    status: "idle",
    error: null,
  },

  reducers: {
    removeFilms(state) {
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
        state.films = action.payload;
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
