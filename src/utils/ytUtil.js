import axios from "axios";
import { YOUTUBE_API_KEY } from "../config/secret";

export const GET_GALLERY_VIDEOS = "GET_GALLERY_VIDEOS";
export const GET_CURRENT_VIDEO = "GET_CURRENT_VIDEO";
export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT";
export const GET_VIDEO_COMMENT = "GET_VIDEO_COMMENT";
export const GET_RELATED_VIDEOS = "GET_RELATED_VIDEOS";

export const fetchYoutube = (keyword) => {
    const url = "https://www.googleapis.com/youtube/v3/search";
    const params = {
        key: YOUTUBE_API_KEY,
        type: "video",
        q: keyword,
        part: "snippet",
        maxResults: 20,
    };
    return axios.get(url, { params })
            .then(res => { 
                return res.data;
            });
};

export const getMostPopularVideos = (nextPageToken) => {
    const url = "https://www.googleapis.com/youtube/v3/videos";
    const params = {
        key: YOUTUBE_API_KEY,
        chart: "mostPopular",
        regionCode: "US",
        part: "snippet,contentDetails,statistics",
        maxResults: 20,
        videoCategoryId: "",
        pageToken: nextPageToken
    };
    return axios.get(url, { params })
            .then(res => {
                return res.data;
            })
}

export const getVideoInfo = videoId => {
    const url = "https://www.googleapis.com/youtube/v3/videos";
    const params = {
        key: YOUTUBE_API_KEY,
        part:"snippet,contentDetails,statistics",
        videoCategoryId: "",
        id: videoId
    };
    return axios.get(url, { params })
            .then(res => {
                return res.data;
            });
};

export const fetchVideoComment = (videoId, nextPageToken) => {
    const url = "https://www.googleapis.com/youtube/v3/commentThreads";
    const params = {
        key: YOUTUBE_API_KEY,
        part: "snippet,replies",
        videoId: videoId,
        textFormat: "plainText",
        maxResults: 50,
        pageToken: nextPageToken
    };
    return axios.get(url, { params })
            .then(res => {
                return res.data;
            });
};

export const getRelatedVideo = videoId => {
    const url = "https://www.googleapis.com/youtube/v3/search";
    const params = {
        key: YOUTUBE_API_KEY,
        part: "snippet",
        relatedToVideoId: videoId,
        type: "video",
        maxResults: 20
    };
    return axios.get(url, { params })
            .then(res => {
                return res.data;
            })
};
