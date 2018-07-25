import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { 
    CardContent,
    Typography,
    LinearProgress,    
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
    render(){
        const { classes, currentVideo } = this.props;
        if(currentVideo.length === 0){
            return(
                <div>
                   <LinearProgress/>
                </div>
            )
        } 
        else if(currentVideo) {
            const { title } = currentVideo[0].snippet;
            const { 
                viewCount,
                likeCount,
                dislikeCount,
            } = currentVideo[0].statistics;
            return(
                <div 
                    className={ classes.root } 
                    id="VideoPlayer">
                <div>
                    <iframe 
                        className={ classes.media }
                        src={`https://www.youtube.com/embed/${currentVideo[0].id}`} 
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
        
    }
};

export default withStyles(styles)(VideoPlayer);