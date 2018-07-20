import React, { Component } from "react";
import VideoList from "../videolist/VideoList";
import { LinearProgress, Grid } from "@material-ui/core";
import VideoPlayer from "../videoplayer/VideoPlayer";
import Comment from "../comment/Comment";
import Navbar from "../navbar/Navbar";

class PageHomePage extends Component {
    componentDidMount(){
        const videoId = localStorage.videoId;
        this.props.getVideoInfo(videoId);
        this.props.fetchVideoComment(videoId);
        this.props.getRelatedVideo(videoId);
    };  

    render(){
        if(this.props.currentVideo.length === 0 || this.props.commentList.length === 0 || this.props.relatedVideos.length === 0) {
            return (
                <div>
                   <LinearProgress/>
                </div>
            )
        } else if(this.props.currentVideo.length > 0 && this.props.relatedVideos.length >0  ) {
            return(
                <div>
                    <Navbar state={ this.props }/>
                    <Grid container >
                        <Grid item xs={ 12 } sm={ 12 }>
                            <VideoPlayer state={ this.props }/>
                        </Grid>
                    </Grid>
                    <Grid container style={{ flexFlow: "wrap-reverse"}}>
                        <Grid item xs={ 12  } sm={ 6 }>
                            <Comment state={ this.props }/>
                        </Grid> 
                        <Grid item xs={ 12 } sm={ 6 }>
                            <VideoList state={ this.props }/>
                        </Grid> 
                    </Grid>
                </div>
            )
        }
    }
};

export default PageHomePage;


