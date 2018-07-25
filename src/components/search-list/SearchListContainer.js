import { connect } from "react-redux";
import SearchList from "./SearchList";
import * as videoActions from "../../actions/videoActions";

export const mapStateToProps = state => {
    return {
        searchResult: state.searchResultReducer.searchResult,
        searchKeyword: state.searchResultReducer.searchKeyword,
        nextPageToken: state.searchResultReducer.nextPageToken
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        fetchYoutube: keyword => {
            return dispatch(videoActions.fetchYoutube(keyword));
        },
        getVideoInfo: videoId => {
            return dispatch(videoActions.getVideoInfo(videoId));
        },
        fetchVideoComment: (videoId, nextPageToken) => {
            return dispatch(videoActions.fetchVideoComment(videoId, nextPageToken));
        },
        getRelatedVideo: videoId => {
            return dispatch(videoActions.getRelatedVideo(videoId));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);