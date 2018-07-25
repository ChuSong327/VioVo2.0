import { connect } from "react-redux";
import VideoPlayer from "./VideoPlayer";

import * as videoActions from "../../actions/videoActions";

export const mapStateToProps = state => {
    return {
        currentVideo: state.currentVideoReducer.currentVideo,
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        getVideoInfo: videoId => {
            return dispatch(videoActions.getVideoInfo(videoId));
        },
        fetchVideoComment: (videoId, nextPageToken) => {
            return dispatch(videoActions.fetchVideoComment(videoId, nextPageToken));
        },
        getRelatedVideo: videoId => {
            return dispatch(videoActions.getRelatedVideo(videoId));
        },
        fetchYoutube: keyword => {
            return dispatch(videoActions.fetchYoutube(keyword));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);