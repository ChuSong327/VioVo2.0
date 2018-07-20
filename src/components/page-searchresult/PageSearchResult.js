import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import SearchList from "../search-list/SearchList";
import { LinearProgress } from "@material-ui/core";

class PageSearchResult extends Component {
    componentDidMount(){
        const keyword = localStorage.searchKeyword;
        this.props.fetchYoutube(keyword);
    };

    render(){
        if(!this.props.searchResult.length) {
            return (
                <div>
                    <LinearProgress />
                </div>
            )
        } else if(this.props.searchResult.length) {
            return(
                <div>
                    <Navbar state={ this.props }/>
                    <SearchList state={ this.props }/>
                </div>
            );
        }
    }
};

export default PageSearchResult;