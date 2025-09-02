const token = process.env.REACT_APP_TMDB_TOKEN;

export const headers = {
  accept: "application/json",
  Authorization: `Bearer ${token}`,
};
