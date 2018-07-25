import React, { Component } from "react";
import NavbarContainer from "../navbar/NavbarContainer";
import SearchListContainer from "../search-list/SearchListContainer";

class PageSearchResult extends Component {
    componentDidMount(){
        let keyword = this.props.match.params.keyword;
        this.props.fetchYoutube(keyword);
    };

    componentDidUpdate(prevProps){
        if(this.props.match.params.keyword !== prevProps.match.params.keyword) {
            this.props.fetchYoutube(this.props.match.params.keyword)
        }
    };

    render(){
        return(
            <div>
                <NavbarContainer/>
                <SearchListContainer/>
            </div>
        )
    }
};

export default PageSearchResult;