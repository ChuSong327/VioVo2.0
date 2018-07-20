import { connect } from "react-redux";
import PageVideoPlayer from "./PageVideoPlayer";
import * as videoActions from "../../actions/videoActions";

export const mapStateToProps = state => {
    return {
        currentVideo: state.currentVideoReducer.currentVideo,
        commentList: state.commentListReducer.commentList,
        nextPageToken: state.commentListReducer.nextPageToken,
        relatedVideos: state.relatedVideosReducer.relatedVideos
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

export default connect(mapStateToProps, mapDispatchToProps)(PageVideoPlayer);