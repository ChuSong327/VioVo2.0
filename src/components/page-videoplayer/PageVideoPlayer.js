import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import VideoListContainer from "../videolist/VideoListContainer";
import VideoPlayerContainer from "../videoplayer/VideoPlayerContainer";
import CommentContainer from "../comment/CommentContainer";
import NavbarContainer from "../navbar/NavbarContainer";

class PageHomePage extends Component {
    componentDidMount(){
        let videoId = this.props.match.params.video_id;
        this.props.getVideoInfo(videoId);
        this.props.fetchVideoComment(videoId);
        this.props.getRelatedVideo(videoId);
    };  
    componentDidUpdate(prevProps){
        let videoId = this.props.match.params.video_id;
        if(videoId !== prevProps.match.params.video_id){
            this.props.getVideoInfo(videoId);
            this.props.fetchVideoComment(videoId);
            this.props.getRelatedVideo(videoId);
        }
    };

    render(){
        return(
            <div>
                <NavbarContainer/>
                <Grid container >
                    <Grid item xs={ 12 } sm={ 12 }>
                        <VideoPlayerContainer/>
                    </Grid>
                </Grid>
                <Grid container style={{ flexFlow: "wrap-reverse"}}>
                    <Grid item xs={ 12  } sm={ 6 }>
                        <CommentContainer/>
                    </Grid> 
                    <Grid item xs={ 12 } sm={ 6 }>
                        <VideoListContainer/>
                    </Grid> 
                </Grid>
            </div>
        )
    }
};

export default PageHomePage;


