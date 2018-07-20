import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Moment from "react-moment";
import { 
    Card,
    CardMedia,
    CardContent,
    Typography
} from "@material-ui/core";
import {
    ThumbUp,
    ThumbDown
} from "@material-ui/icons";
import { convertNumbers, formatNumbers } from "../../utils/numConverter";

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    commentCount: {
        fontSize: "18px",
        marginLeft: theme.spacing.unit * 2.2,
        marginTop: theme.spacing.unit * 2.5,
        marginBottom: theme.spacing.unit * 1.5
    }, 
    card: {
        height: "auto",
        boxShadow: "none",
        display: "flex",
        flexDirection:"row",
        justifyContent: "flex-start",
        paddingBottom: 0
    },
    authorImage: {
        borderRadius: "50%",
        height: "45px",
        width: "45px",
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2.2
    },
    authorName: {
        fontWeight: 500,
        marginRight: theme.spacing.unit * 1.5,
        display: "inline-blcok",
        float: "left",
        fontSize: "13px"
    },
    publishedAt: {
        color:"#9E9E9E",
        display: "inline-block",
        float: "left",
        fontSize: "13px"
    },
    commentBox: {
        paddingTop: "6px",
        paddingBottom: "6px",
        height: "auto"
    },
    commentText: {
        fontSize: "15px",
        overflow:"hidden",
        textOverflow: "ellipsis",
        lineHeight: 1.5
    },
    commentStat: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    likeStyle: {
        fontSize:"16px",
        color: "#9E9E9E",
        "&:hover": {
            color: "#757575"
        },
        marginRight: theme.spacing.unit * 1
    },
    likeCount: {
        fontSize: "13px",
        color: "#9E9E9E",
        marginRight: theme.spacing.unit * 2,
    }
});

class Comment extends Component {
    render(){
        const { classes } = this.props;
        const { commentList } = this.props.state;
        const { commentCount } = this.props.state.currentVideo[0].statistics;
        return (
            <div className={ classes.root }>
                <div>
                    <Typography className={ classes.commentCount }>
                        { formatNumbers(commentCount) } Comments
                    </Typography>
                </div>
                <div>
                    {commentList.map((comment, index) => {
                        const authorName = comment.snippet.topLevelComment.snippet.authorDisplayName;
                        const authorImage = comment.snippet.topLevelComment.snippet.authorProfileImageUrl;
                        const { publishedAt,likeCount,textDisplay } = comment.snippet.topLevelComment.snippet;
                        return(
                            <Card key={ index } className={ classes.card }>
                                <div>
                                    <CardMedia
                                        className={ classes.authorImage }
                                        image={ authorImage } />
                                </div>
                                <div>
                                    <CardContent>
                                        <Typography className={ classes.authorName }>
                                            { authorName } 
                                        </Typography>
                                        <Typography className={ classes.publishedAt }>
                                            <Moment fromNow>{ publishedAt }</Moment>
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={ classes.commentBox}> 
                                        <Typography className={ classes.commentText }>
                                            { textDisplay }
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={ classes.commentStat }>
                                        <ThumbUp className={ classes.likeStyle }></ThumbUp> 
                                        <Typography className={ classes.likeCount }>
                                            { convertNumbers(likeCount) }
                                        </Typography>
                                        <ThumbDown className={ classes.likeStyle }></ThumbDown>
                                    </CardContent>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        )
        
    };
};

export default withStyles(styles)(Comment);
