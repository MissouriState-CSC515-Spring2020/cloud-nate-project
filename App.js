import React from 'react';
import Rect, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Searchbar from './Searchbar';
const Searchbar = lazy(() => import('./Searchbar'));
//import youtube from '../apis/youtube';
const youtube = lazy(() => import('../apis/youtube'));
//import VideoList from './VideoList';
const VideoList = lazy(() => import('./VideoList'));
//import VideoDetail from './VideoDetail';
const VideoDetail = lazy(() => import('./VideoDetail'));

//import Nav from './Nav';
const Nav = lazy(() => import('./Nav'));


class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  handleSubmit = async (termFromSearchBar) => {
    console.log('search' + termFromSearchBar);
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    })
    this.setState({
      videos: response.data.items
    })
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>A Page Using the Youtube Data API to Fetch Videos</h1>
          <br></br>
          <Nav />
          <Switch path>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/" component={Home} />
          </Switch>

          <div className="start-template">
            <div className="container1">
              <div className="container">
                <div className="row justify-content-md-center">
                  <Searchbar handleFormSubmit={this.handleSubmit} />
                </div>
                <br />

                <div className="row justify-content-md-center">
                  <div className="col">
                    <VideoDetail video={this.state.selectedVideo} />
                  </div>
                  <div className="col-sm-auto">
                    <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr></hr>
          <p> Created 4/9/2020</p>
        </div >
      </Router >
    );
  }
}

const Home = () => (
  <div className="start-template">
    <br />
    <h2>HomePage: YT Videos</h2>
    <br />

  </div>
);

export default App;
