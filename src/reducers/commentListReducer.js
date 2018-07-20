import * as ytUtil from "../utils/ytUtil";

const defaultCommentListState = Object.freeze({
    commentList: [],
    nextPageToken: ""
});

const commentListReducer = (
    reducerState = defaultCommentListState, action
) => {
    Object.freeze(reducerState);
    switch (action.type) {
        case ytUtil.GET_VIDEO_COMMENT: 
            const commentList = action.commentList;
            const nextPageToken = action.nextPageToken;
            // const commentToRender = reducerState.commentList.concat(commentList);
            const newCommentListState = Object.assign({}, reducerState, { commentList: commentList, nextPageToken: nextPageToken });
            return newCommentListState;
        default:
            return reducerState;
    }
};

export default commentListReducer;