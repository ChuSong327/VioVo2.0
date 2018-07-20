import * as ytUtils from "../utils/ytUtil";

export const updateGalleryVideos = galleryVideos => {
    return {
        type: ytUtils.GET_GALLERY_VIDEOS,
        galleryVideos: galleryVideos.items,
        nextPageToken: galleryVideos.nextPageToken
    }
};

export const updateCurrentVideo = currentVideo => {
    return {
        type: ytUtils.GET_CURRENT_VIDEO,
        currentVideo
    }
};

export const updateSearchResult = searchResult => {
    return {
        type: ytUtils.GET_SEARCH_RESULT,
        searchResult,
    }
};

export const updateCommentList = commentList => {
    return {
        type: ytUtils.GET_VIDEO_COMMENT,
        commentList: commentList.items,
        nextPageToken: commentList.nextPageToken
    }
};

 export const updateRelatedVideos = relatedVideos => {
     return {
         type: ytUtils.GET_RELATED_VIDEOS,
         relatedVideos
     }
 }

export const getMostPopularVideos = (nextPageToken) => {
    return (dispatch) => {
        ytUtils.getMostPopularVideos(nextPageToken).then(galleryVideos => {
            dispatch(updateGalleryVideos(galleryVideos));
            return galleryVideos;
        })
    }
};

export const getVideoInfo = videoId => {
    return (dispatch) => {
        ytUtils.getVideoInfo(videoId).then(currentVideo => {
            dispatch(updateCurrentVideo(currentVideo));
            return currentVideo;
        })
    }
};

export const fetchYoutube = keyword => {
    return (dispatch) => {
        ytUtils.fetchYoutube(keyword).then(searchResult => {
            dispatch(updateSearchResult(searchResult));
            return searchResult;
        })
    }
};

export const fetchVideoComment = (videoId, nextPageToken) => {
    return (dispatch) => {
        ytUtils.fetchVideoComment(videoId, nextPageToken).then(commentList => {
            dispatch(updateCommentList(commentList));
            return commentList;
        })
    }
};

export const getRelatedVideo = videoId => {
    return (dispatch) => {
        ytUtils.getRelatedVideo(videoId).then(relatedVideos => {
            dispatch(updateRelatedVideos(relatedVideos));
            return relatedVideos;
        })
    }
};

