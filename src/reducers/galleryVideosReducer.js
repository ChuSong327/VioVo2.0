import * as ytUtil from "../utils/ytUtil";

const defaultGalleryVideosState = Object.freeze({
    galleryVideos: [],
    nextPageToken: "",
});

const galleryVideosReducer = (
    reducerState = defaultGalleryVideosState, action
) => {
    Object.freeze(reducerState);
    switch (action.type) {
        case ytUtil.GET_GALLERY_VIDEOS: 
            const galleryVideos = action.galleryVideos;
            const nextPageToken = action.nextPageToken;
            const videosToRender = reducerState.galleryVideos.concat(galleryVideos);
            const newGalleryVideosState = Object.assign({}, reducerState, { galleryVideos: videosToRender, nextPageToken: nextPageToken});
            return newGalleryVideosState;
        default:
            return reducerState;
    }
};

export default galleryVideosReducer;