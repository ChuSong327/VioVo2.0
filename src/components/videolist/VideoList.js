import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { 
    Card,
    CardMedia,
    CardContent,
    Typography
} from "@material-ui/core";
import Moment from "react-moment";

const styles = theme => ({
    root: {
        marginTop: "5px"
    },
    card: {
        boxShadow: "none",
        marginBottom: "5px",
        marginLeft: "5px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        height: "100px",
        "&:hover": {
            cursor: "pointer",
            boxShadow: "1px 2px 3px #ddd",
            transform:"translateY(-1px)"
        }
    },
    image: {
        height: "100px",
        width: "180px"
    },
    main: {
        paddingLeft: theme.spacing.unit * 0.5,
        paddingTop: 0,
        paddingBottom: 0,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    info:{
        paddingLeft: theme.spacing.unit * 0.5,
        paddingTop: 0,
        paddingBottom: 0,
    },
    title: {
        width: "200px",
        height: "auto",
        whiteSpace: "normal",
        fontWeight: 500,
        fontSize: "14px",
    },
    channelTitle:{
        fontSize: "13px",
        color: "#757575",
        letterSpacing: "0.5px"
    },
    viewCount:{
        fontSize: "13px",
        color: "#757575"
    }
});

class VideoList extends Component {
    constructor(props){
        super(props);
        this.handleVideoClick = this.handleVideoClick.bind(this);
    };

    handleVideoClick(event){
        const videoId = event.currentTarget.id;
        this.props.getVideoInfo(videoId);
        this.props.getRelatedVideo(videoId);
        this.props.fetchVideoComment(videoId);
    };

    render(){
        const { relatedVideos } = this.props;
        const { classes } = this.props;
        return(
            <div className={ classes.root }>
                {relatedVideos.map((video, index) => {
                    const { title, publishedAt, channelTitle } = video.snippet;
                    const { url } = video.snippet.thumbnails.medium;
                    const { videoId } = video.id;
                    return(
                        <Link
                            key={ index }
                            to={`/currentplaying/${videoId}`}
                            style={{textDecoration: "none"}}>
                            <Card 
                                className={ classes.card }
                                id={ videoId } 
                                onClick={ this.handleVideoClick }>
                                <CardMedia
                                    className={ classes.image }
                                    image={ url }/>
                                <div>
                                    <CardContent className={ classes.main } >
                                        <Typography className={ classes.title }>
                                            { title }
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={ classes.main }>
                                        <Typography className={ classes.channelTitle }>
                                            { channelTitle }
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={ classes.main }>
                                        <Typography className={ classes.viewCount }>
                                            <Moment fromNow>{ publishedAt }</Moment>
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        )
        
    };
};

export default withStyles(styles)(VideoList);