import { connect } from "react-redux";
import PageHomepage from "./PageHomepage";
import * as videoActions from "../../actions/videoActions";

export const mapStateToProps = globalState => {
    return {
        galleryVideos: globalState.galleryVideosReducer.galleryVideos,
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        getMostPopularVideos: (nextPageToken) => {
            return dispatch(videoActions.getMostPopularVideos(nextPageToken));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageHomepage);