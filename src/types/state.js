type Show = {
  id: number,
  name: string,
};

export type State = {
  data: Show,
  loading: boolean,
  error: ?Error,
  title: string,
  headerTitle: string,
  seasons: [],
  episodes: [],
  selectedSeason: boolean,
};

export type AuthState = {
  isAuthorized: boolean,
  error: 'string',
  invalidUser: 'string',
}
