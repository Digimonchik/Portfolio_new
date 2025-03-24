import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "rMbNJWjrebVOp00sR24gN9HyHXVyzBvc";
const BASE_URL = "https://api.giphy.com/v1/gifs";

// Асинхронный экшен для получения гифок
const fetchGifs = createAsyncThunk("gifs/fetchGifs", async (searchValue, thunkAPI) => {
  try {
    const response = await fetch(`${BASE_URL}/search?api_key=${API_KEY}&q=${searchValue}&limit=15&offset=1`);
    
    if (!response.ok) {
      throw new Error("Ошибка загрузки GIFs");
    }

    const data = await response.json();
    console.log(data)
    return data.data; 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const gifsSlice = createSlice({
  name: "gifs",
  initialState: {
    gifs: [],
    status: "idle", 
    error: null,
  },

  reducers: {
    removeGifs(state) {
      state.gifs = [];
      state.status = "idle";
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchGifs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGifs.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload)
        state.gifs = action.payload;
      })
      .addCase(fetchGifs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { removeGifs } = gifsSlice.actions;
export { fetchGifs };
export default gifsSlice.reducer;