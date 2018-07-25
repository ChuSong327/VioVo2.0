import { connect } from "react-redux";
import Navbar from "./Navbar";
import { withRouter } from "react-router";
import * as videoActions from "../../actions/videoActions";

export const mapStateToProps = state => {
    return {
        searchResult: state.searchResultReducer.searchResult,
        searchKeyword: state.searchResultReducer.searchKeyword,
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        fetchYoutube: (keyword, pageToken) => {
            return dispatch(videoActions.fetchYoutube(keyword, pageToken));
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));