import { combineReducers } from "redux";
import galleryVideosReducer from "./galleryVideosReducer";
import currentVideoReducer from "./currentVideoReducer";
import searchResultReducer from "./searchResultReducer";
import commentListReducer from "./commentListReducer";
import relatedVideosReducer from "./relatedVideosReducer";

const RootReducer = combineReducers({ 
    galleryVideosReducer,
    currentVideoReducer,
    searchResultReducer,
    commentListReducer,
    relatedVideosReducer
});

export default RootReducer;