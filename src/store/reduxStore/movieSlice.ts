import { headers } from "./headers";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Интерфейс для актёра
interface Actor {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

// Интерфейсы для деталей фильма
interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

interface MovieDetails {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Интерфейс состояния слайса
interface MovieState {
  details: MovieDetails | null;
  credits: Actor[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// AsyncThunk с типами
const fetchMovieFullInfo = createAsyncThunk<
  { details: MovieDetails; credits: Actor[] }, // return type
  number, // аргумент — id фильма
  { rejectValue: string } // reject type
>("movie/fetchMovieFullInfo", async (id, thunkAPI) => {
  try {
    const detailsRes = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      { headers }
    );
    if (!detailsRes.ok) throw new Error("Failed to fetch movie details");
    const detailsData: MovieDetails = await detailsRes.json();

    const creditsRes = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      { headers }
    );
    if (!creditsRes.ok) throw new Error("Failed to fetch movie credits");
    const creditsData = await creditsRes.json();

    return {
      details: detailsData,
      credits: creditsData.cast as Actor[],
    };
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Слайс с типами состояния
const initialState: MovieState = {
  details: null,
  credits: [],
  status: "idle",
  error: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    clearMovie: (state) => {
      state.details = null;
      state.credits = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieFullInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchMovieFullInfo.fulfilled,
        (
          state,
          action: PayloadAction<{ details: MovieDetails; credits: Actor[] }>
        ) => {
          state.status = "succeeded";
          state.details = action.payload.details;
          state.credits = action.payload.credits;
        }
      )
      .addCase(
        fetchMovieFullInfo.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.status = "failed";
          state.error = action.payload || "Unknown error";
        }
      );
  },
});

export const { clearMovie } = movieSlice.actions;
export { fetchMovieFullInfo };
export default movieSlice.reducer;
