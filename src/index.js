import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
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

    this.state={ videos: [] };

    YTSearch({key: API_KEY, term:'react.js'},(videos) => {
      this.setState({ videos }) //e come se facessi this.state.setState({videos:videos}) ES6 syntax
    });
  }

  render(){
      return(
        <div>
          <SearchBar />
          <VideoDetail video={this.state.videos[0]}/>
          <VideoList videos={this.state.videos} />
        </div>
      );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
