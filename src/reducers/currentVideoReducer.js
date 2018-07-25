import * as ytUtil from "../utils/ytUtil";

const defaultCurrentVideoState = Object.freeze({
    currentVideo: []
});

const currentVideoReducer = (
    state = defaultCurrentVideoState, action
) => {
    Object.freeze(state);
    switch (action.type) {  
        case ytUtil.GET_CURRENT_VIDEO: 
            const currentVideo = action.currentVideo;
            const newCurrentVideoState = Object.assign({}, state, { currentVideo: currentVideo });
            return newCurrentVideoState;
        default:
            return state;
    }
};

export default currentVideoReducer;