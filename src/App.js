import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import PageHomepageContainer from "./components/page-homepage/PageHomepageContainer";
import PageSearchResultContainer from "./components/page-searchresult/PageSearchResultContainer";
import PageVideoPlayerContainer from "./components/page-videoplayer/PageVideoPlayerContainer";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff6f60",
      main: "#e53935",
      dark: "#ab000d",
      contrastText: "#fafafa",
    },
    secondary: {
      light: "#ffffff",
      main: "#fbe9e7",
      dark: "#c8b7b5",
      contrastText: "#fafafa",
    }
  },
  typography: {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  }
});


class App extends Component {
  render() {
      return(
          <MuiThemeProvider theme={ theme }>
              <BrowserRouter>
                  <Switch>
                      <Route exact path="/" component={ PageHomepageContainer }/>
                      <Route exact path="/search/:keyword" component={ PageSearchResultContainer }/>
                      <Route exact path="/currentplaying/:video_id" component={ PageVideoPlayerContainer }/>
                  </Switch>
              </BrowserRouter>
          </MuiThemeProvider>
      )
  }
};

export default App;
