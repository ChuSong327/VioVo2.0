import * as ytUtil from "../utils/ytUtil";

const defaultSearchResultState = Object.freeze({
    searchResult: [],
    nextPageToken: "",
});

const searchResultReducer = (
    state = defaultSearchResultState, action
) => {
    Object.freeze(state);
    switch (action.type) {
        case ytUtil.GET_SEARCH_RESULT: 
            const nextPageToken = action.searchResult.nextPageToken;
            const searchResult = action.searchResult.items;
            const newSearchResultState = Object.assign({}, state, { searchResult: searchResult, nextPageToken: nextPageToken });
            return newSearchResultState;
        default:
            return state;
    }
};

export default searchResultReducer;