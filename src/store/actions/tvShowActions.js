import { ActionTypes } from '../constants/actionTypes';
import fetchData from '../../api/client';


export const searchShow = (query) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.SEARCH_TV_SHOW_REQUEST });
    const { _embedded: embedded, ...rest } = await fetchData(`/singlesearch/shows?q=${query}&embed=seasons`);
    dispatch({ payload: { ...rest, embedded }, type: ActionTypes.SEARCH_TV_SHOW_SUCCESS, });

    dispatch(fetchEpisodes(embedded.seasons[0].id));
  } catch (error) {
    dispatch({ payload: error, type: ActionTypes.SEARCH_TV_SHOW_ERROR, });
  }
};

export const fetchEpisodes = (seasonId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.FETCH_EPISODES_REQUEST });
    const episodes = await fetchData(`/seasons/${seasonId}/episodes`);
    dispatch({ payload: { episodes, seasonId }, type: ActionTypes.FETCH_EPISODES_SUCCESS });
  } catch (error) {
    dispatch({ payload: error, type: ActionTypes.FETCH_EPISODES_ERROR });
  }
};

export const resetTitle = () => ({
  type: ActionTypes.RESET_TITLE,
});
