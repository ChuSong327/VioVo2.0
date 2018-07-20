import * as ytUtil from "../utils/ytUtil";

const defaultRelatedVideosState = Object.freeze({
    relatedVideos: []
});

const relatedVideosReducer = (
    state = defaultRelatedVideosState, action
) => {
    Object.freeze(state);
    switch (action.type) {
        case ytUtil.GET_RELATED_VIDEOS: 
            const relatedVideos = action.relatedVideos.items;
            const newRelatedVideosState = Object.assign({}, state, { relatedVideos: relatedVideos });
            return newRelatedVideosState;
        default:
            return state;
    }
};

export default relatedVideosReducer;