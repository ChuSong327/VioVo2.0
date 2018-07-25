import React, { Component } from "react";
import NavbarContainer from "../navbar/NavbarContainer";
import GalleryContainer from "../gallery/GalleryContainer";

class PageHomePage extends Component {
    render(){
        return(
            <div>
                <NavbarContainer/>
                <GalleryContainer/>
            </div>
        )
    }
};

export default PageHomePage;


