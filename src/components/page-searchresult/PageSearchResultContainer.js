import { connect } from "react-redux";
import PageSearchResult from "./PageSearchResult";
import * as videoActions from "../../actions/videoActions";

export const mapStateToProps = state => {
    return {
        searchResult: state.searchResultReducer.searchResult,
        // nextPageToken: state.searchResultReducer.nextPageToken
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        fetchYoutube: keyword => {
            return dispatch(videoActions.fetchYoutube(keyword));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageSearchResult);