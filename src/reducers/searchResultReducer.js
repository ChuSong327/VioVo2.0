import * as ytUtil from "../utils/ytUtil";

const defaultSearchResultState = Object.freeze({
    searchResult: [],
    searchKeyword: "",
    nextPageToken: "",
});

const searchResultReducer = (
    state = defaultSearchResultState, action
) => {
    Object.freeze(state);
    switch (action.type) {
        case ytUtil.GET_SEARCH_RESULT: 
            const nextPageToken = action.nextPageToken;
            const searchResult = action.searchResult;
            const searchKeyword = action.searchKeyword;
            const newSearchResultState = Object.assign({}, state, { searchResult: searchResult, searchKeyword: searchKeyword, nextPageToken: nextPageToken });
            return newSearchResultState;
        default:
            return state;
    }
};

export default searchResultReducer;