import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { convertNumbers } from "../../utils/numConverter";
import { 
    Typography,
    Card, 
    CardContent,
    CardMedia,
} from "@material-ui/core";
import Moment from "react-moment";

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        overflow: "scroll",
        marginBottom: theme.spacing.unit * 2
    },
    card : {
        width: 260,
        height: 230,
        marginTop: theme.spacing.unit * 6,
        marginRight: theme.spacing.unit * 2,
        "&:hover": {
            cursor: "pointer"
        }
    },
    progress: {
        marginTop: theme.spacing.unit * 0.5
    },
    media: {
        height: 0,
        paddingTop: "56.25%",
    },
    videoTitle: {
        paddingTop: theme.spacing.unit * 1,
        paddingLeft: theme.spacing.unit * 0.5, 
        paddingBottom: 0,
        height: theme.spacing.unit * 3,
    },
    title: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap", 
        overflow:"hidden",
        fontWeight: 500,
        fontSize: "1rem"
    },
    channelInfo: {
        marginTop: 0,
        paddingTop: theme.spacing.unit * 0.5,
        paddingLeft: theme.spacing.unit * 0.5,
    },
    channelTitle: {
        fontWeight: 400,
        color: "grey",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap", 
        overflow:"hidden",
    },
    dot: {
        height: "3px",
        width: "3px",
        backgroundColor: "grey",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: theme.spacing.unit * 0.3,
        marginRight: theme.spacing.unit * 0.3,
        marginBottom: theme.spacing.unit * 0.3
    },
    loadingIcon: {
        display: "block",
        marginLeft: theme.spacing.unit * 50,
        marginTop: theme.spacing.unit * 2
    }
});


class Gallery extends Component {
    constructor(props){
        super(props);
        this.handleGalleryScroll = this.handleGalleryScroll.bind(this);
        this.handleVideoClick = this.handleVideoClick.bind(this);
    };
    componentDidMount(){
        this.props.getMostPopularVideos();
    }

    handleGalleryScroll(event){
        event.preventDefault();
        const pageToken = this.props.nextPageToken;
        const galleryClientHeight = window.document.getElementById("Gallery").clientHeight;
        const galleryScrollTop = window.document.getElementById("Gallery").scrollTop;
        const galleryScrollHeight = window.document.getElementById("Gallery").scrollHeight;

        if (galleryClientHeight + galleryScrollTop === galleryScrollHeight) {
            this.props.getMostPopularVideos(pageToken);
        }
    };
   
    handleVideoClick(event){
        const videoId = event.currentTarget.id;
        this.props.getVideoInfo(videoId);
    };

    render() {
        const { classes } = this.props;
        const videos = this.props.galleryVideos;

        return (
            <div 
                className={ classes.root } 
                id="Gallery" 
                onScroll={ this.handleGalleryScroll } 
                style={{height: "720px"}}>
                {videos.map((video, index) => {
                    const { url } = video.snippet.thumbnails.medium;
                    const { title, channelTitle, publishedAt } = video.snippet;
                    const  viewCount  = convertNumbers(video.statistics.viewCount);
                    const { id } = video;
                    return(
                        <Card 
                            id={ id } 
                            key={ index }
                            onClick={ this.handleVideoClick }
                            component={ Link }
                            to={`/currentplaying/${id}`}
                            style={{ textDecoration: "none"}}
                            className={ classes.card } 
                        >
                            <CardMedia 
                                className={ classes.media }
                                image={ url } 
                                title={ title }/>
                            <CardContent className={ classes.videoTitle }>
                                <Typography 
                                    component="h3" 
                                    className={ classes.title } 
                                    id={ id }> 
                                    { title }
                                </Typography>
                            </CardContent>
                            <CardContent className={ classes.channelInfo } >
                                <Typography component="h4" className={ classes.channelTitle }> 
                                    { channelTitle } 
                                    <br/>
                                    { viewCount } views 
                                    <span classes="dot" className={ classes.dot }></span> 
                                    <Moment fromNow>{ publishedAt }</Moment>
                                </Typography>
                            </CardContent>
                        </Card> 
                    )      
                })}
            </div>
        )
    };
};

export default withStyles(styles)(Gallery);