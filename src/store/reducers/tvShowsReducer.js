import type { State } from '../../types';
import { ActionTypes } from '../constants/actionTypes';

const initialState: State = {
  data: {},
  episodes: [],
  error: null,
  headerTitle: 'Search Enter',
  loading: false,
  seasons: [],
  selectedSeason: null,
  title: 'Search',
};

const tvShowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_TV_SHOW_REQUEST:
      return {
        ...state,
        episodes: [],
        headerTitle: 'Searching',
        loading: true,
        title: 'Searching',
      };
    case ActionTypes.SEARCH_TV_SHOW_SUCCESS:
      return {
        ...state,
        data: action.payload,
        headerTitle: 'Search Results',
        loading: false,
        seasons: action.payload.embedded.seasons,
        selectedSeason: action.payload.embedded.seasons[0].id,
        title: action.payload.name,
      };
    case ActionTypes.SEARCH_TV_SHOW_ERROR:
      return {
        ...state,
        data: {},
        error: action.payload,
        headerTitle: 'Search No Results',
        loading: false,
        seasons: [],
        title: 'No results',
      };
    case ActionTypes.RESET_TITLE:
      return {
        ...state,
        headerTitle: 'Searching',
        loading: false,
        title: 'Searching',
      };
    case ActionTypes.FETCH_EPISODES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: action.payload.episodes,
        loading: false,
        selectedSeason: action.payload.seasonId,
      };
    case ActionTypes.FETCH_EPISODES_ERROR:
      return {
        ...state,
        data: {},
        error: action.payload,
        headerTitle: 'Search No Results',
        loading: false,
        seasons: [],
        title: 'No results',
      };
    default:
      return state;
  }
};

export default tvShowsReducer;
