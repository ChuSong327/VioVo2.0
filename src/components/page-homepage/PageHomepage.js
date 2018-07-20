import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Gallery from "../gallery/Gallery";
import { LinearProgress } from "@material-ui/core";

class PageHomePage extends Component {
    componentDidMount(){
        this.props.getMostPopularVideos();
    };  

    render(){
        if(!this.props.galleryVideos) {
            return (
                <div>
                   <LinearProgress/>
                </div>
            )
        } else if(this.props.galleryVideos) {
            return(
                <div>
                    <Navbar state={ this.props }/>
                    <Gallery state={this.props} />
                </div>
            )
        }
    }
};

export default PageHomePage;


