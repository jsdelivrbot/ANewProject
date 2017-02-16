import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyAZ7z3EUSqSA1ciGH1SElivGLTJNtC8lNM';

//import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
       videos: [],
       selectedVideo: null
    };

    this.videoSearch('react.js');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term:term},(videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      }) //e come se facessi this.state.setState({videos:videos}) ES6 syntax
    });
  }

  //nel return la variabile term arriva dalle azioni che vengono fatte nel component search_bar
  render(){
      const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

      return(
        <div>
          <SearchBar onSearchTermChange={ videoSearch }/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
        </div>
      );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
