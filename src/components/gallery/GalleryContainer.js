import { connect } from "react-redux";
import Gallery from "./Gallery";
import * as videoActions from "../../actions/videoActions";

export const mapStateToProps = state => {
    return {
        galleryVideos: state.galleryVideosReducer.galleryVideos,
        nextPageToken: state.galleryVideosReducer.nextPageToken,
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        getMostPopularVideos: (nextPageToken) => {
            return dispatch(videoActions.getMostPopularVideos(nextPageToken));
        },
        getVideoInfo: videoId => {
            return dispatch(videoActions.getVideoInfo(videoId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);