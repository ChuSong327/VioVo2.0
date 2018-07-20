import { connect } from "react-redux";
import PageHomepage from "./PageHomepage";
import * as videoActions from "../../actions/videoActions";

export const mapStateToProps = globalState => {
    return {
        galleryVideos: globalState.galleryVideosReducer.galleryVideos,
        nextPageToken: globalState.galleryVideosReducer.nextPageToken
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        getMostPopularVideos: (nextPageToken) => {
            return dispatch(videoActions.getMostPopularVideos(nextPageToken));
        },
        fetchYoutube: keyword => {
            return dispatch(videoActions.fetchYoutube(keyword));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageHomepage);