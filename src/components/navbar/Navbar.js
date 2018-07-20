import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { 
    AppBar, 
    Toolbar, 
    TextField, 
    Typography, 
    IconButton, 
    Menu, 
    MenuItem } from "@material-ui/core";
import { Search, AccountCircle } from "@material-ui/icons";

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        flexGrow: 1,
    },
    title: {
        marginRight: "auto",
        marginLeft: theme.spacing.unit * 2,
        color: "inherit",
        fontSize: "1.6rem",
        letterSpacing:1
    },
    form: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "40%",
        marginRight: "auto",
    },
    search: {
        fontSize: "1.5rem"
    },
    textField: {
        width: "100%",
        alignSelf: "center",
        fontSize: "5rem"
    },
    author: {
        fontSize: "2rem",
        color: "inherit"
   },
   input: {
       fontSize: "1rem",
       color: "white",
       letterSpacing:1,
       paddingLeft: 5
   },
   menuItem: {
       "&:hover": {
           backgroundColor: theme.palette.secondary.main
       }
   }
})

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            anchorEl: null,
            searchInput:"",
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    };

    handleClick(event) {
        this.setState({ anchorEl: event.currentTarget })
    };

    handleClose(event) {
        this.setState({ anchorEl: null })
    };

    handleSearchInput(event){
        this.setState({
            searchInput: event.target.value
        })
    };

    handleSearchClick(event){
        const keyword = this.state.searchInput;
        this.props.state.fetchYoutube(keyword);
        localStorage.setItem("searchKeyword", keyword);
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;

        return (
            <div className={ classes.root }>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="title" className={ classes.title }>
                            <a href="/" style={{ textDecoration: "none", color:"inherit" }}>VioVo</a>
                        </Typography>
                        <form className={ classes.form }>
                            <TextField 
                                id="search-input" 
                                onChange={ this.handleSearchInput }
                                placeholder="Search"
                                className={ classes.textField }
                                InputProps={{
                                    classes: {
                                        input: classes.input,
                                    }
                                }}>
                            </TextField>
                                <IconButton
                                    component={ Link }
                                    to={`/search/${ this.state.searchInput }`}>
                                    <Search 
                                        id="search-input"
                                        onClick={ this.handleSearchClick }  
                                        className={ classes.search } 
                                    />
                                </IconButton>
                        </form>
                        <IconButton 
                            className={ classes.author } 
                            aria-owns={ anchorEl ? "my-menu" : null }
                            aria-haspopup="true"
                            onClick={ this.handleClick }>
                            <AccountCircle style={{ fontSize: "2rem" }} />
                        </IconButton>
                        <Menu 
                            id="my-menu"
                            anchorEl={ anchorEl }
                            open={ Boolean(anchorEl) }
                            onClose={ this.handleClose }>
                            <MenuItem 
                                className={ classes.menuItem } 
                                onClick={ this.handleClose }>
                                <a 
                                    href="https://www.linkedin.com/in/chuchusong/" 
                                    style={{ textDecoration: "none", color: "inherit" }} 
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        LinkedIn
                                </a>
                            </MenuItem>
                            <MenuItem 
                                className={ classes.menuItem } 
                                onClick={ this.handleClose }>
                                <a 
                                    href="https://github.com/chusong327" 
                                    style={{ textDecoration: "none", color: "inherit"}} 
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        Github
                                </a> 
                            </MenuItem>
                        </Menu> 
                    </Toolbar>  
                </AppBar>
            </div>
        )
    }
};

export default withStyles(styles)(Navbar);