import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { 
        CardContent,
        Typography,
       
} from "@material-ui/core";
import {
    ThumbUp,
    ThumbDown
} from "@material-ui/icons";
 
import { convertNumbers, formatNumbers  } from "../../utils/numConverter";

const styles = theme => ({
    root: {
        overflow: "scroll",
    },
    progress: {
        marginTop: theme.spacing.unit * 0.8
    },
    media: {
        width: "100%",
        height: " 40vw",
    },
    videoInfo: {
        marginTop: "-16px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    videoTitle: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        fontWeight: 500,
        fontSize: "20px"
    },
    viewStyle: {
        fontSize: "16px",
        color: "grey",
    },
    videoStats: {
        marginRight: theme.spacing.unit * 6,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    statBar: {
        marginRight: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 1.5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    iconStyle:{
        fontSize: "17px",
        color:"#9E9E9E",
        display: "inline-block",
        marginRight: theme.spacing.unit * 1.2,
        "&:hover": {
            color: "#757575"
        }
    },
    likeStyle: {
        color: "#9E9E9E",
        fontSize: "14px"
    }
});

class VideoPlayer extends Component {
    constructor(props){
        super(props);
        this.handleVideoClick = this.handleVideoClick.bind(this);
        this.handleCommentScroll = this.handleCommentScroll.bind(this);
    };

    handleVideoClick(event){
        const videoId = event.currentTarget.id;
        localStorage.setItem("videoId", videoId);
    };

    handleCommentScroll(event){
        event.preventDefault();
        const videoId = localStorage.videoId;
        const nextPageToken = this.props.state.nextPageToken;
        const commentClientHeight = window.document.getElementById("VideoPlayer").clientHeight;
        const commentScrollTop = window.document.getElementById("VideoPlayer").scrollTop;
        const commentScrollHeight = window.document.getElementById("VideoPlayer").scrollHeight;

        if (commentClientHeight + commentScrollTop === commentScrollHeight) {
            this.props.state.fetchVideoComment(videoId, nextPageToken);
        }
    };

    render(){
        const { classes } = this.props;
        const url = "https://www.youtube.com/embed/" + localStorage.videoId;
        const { title } = this.props.state.currentVideo[0].snippet;
        const { viewCount,
                likeCount,
                dislikeCount,
            } = this.props.state.currentVideo[0].statistics;

        return(
            <div 
                className={ classes.root } 
                id="VideoPlayer" 
                onScroll={ this.handleCommentScroll }>
                <div>
                    <iframe 
                        className={ classes.media }
                        src={ url } 
                        allow="autoplay; encrypted-media" 
                        frameBorder="0"
                        allowFullScreen
                        title={ title }>
                    </iframe>
                </div>
                <Typography className={ classes.videoTitle }>
                    { title }
                </Typography>
                <div className={ classes.videoInfo }>
                    <CardContent>
                        <Typography className={ classes.viewStyle }>
                            { formatNumbers(viewCount) } 
                            views
                        </Typography>
                    </CardContent>
                    <CardContent className={ classes.videoStats }>
                        <div className={ classes.statBar }>
                            <ThumbUp className={ classes.iconStyle }/>
                            <Typography className={ classes.likeStyle }>
                                    { convertNumbers(likeCount) }
                            </Typography>
                        </div>
                        <div className={ classes.statBar }>
                            <ThumbDown className={ classes.iconStyle }/>    
                            <Typography className={ classes.likeStyle }>
                                    { convertNumbers(dislikeCount) }
                            </Typography>
                        </div>
                    </CardContent>
                </div>
                <hr 
                    color="#EEEEEE" 
                    style={{ 
                        marginLeft: 23, 
                        marginTop: -5, 
                        marginRight: 60, 
                        borderBottomWidth: 0.1 }}
                />
            </div>
        )
        
    }
};

export default withStyles(styles)(VideoPlayer);