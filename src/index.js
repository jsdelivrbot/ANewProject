import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyAZ7z3EUSqSA1ciGH1SElivGLTJNtC8lNM';

YTSearch({key: API_KEY, term:'dgiac85'}, function(data){
    console.log(data);
});

//import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component{
  constructor(props){
    super(props);

    /*this.state={ videos: []};

    YTSearch({key: API_KEY, term:'surfboards'},(videos)=>{
      this.state.setState({videos}) //e come se facessi this.state.setState({videos:videos})
    });*/
  }


  render(){
      return(
        <div>
          <SearchBar />
        </div>
      );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));


/*ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));*/







//   import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import YTSearch from 'youtube-api-search';
// import SearchBar from './components/search_bar';
// const API_KEY='AIzaSyAZ7z3EUSqSA1ciGH1SElivGLTJNtC8lNM';
//
// class App extends Component{
//   constructor(props){
//     super(props);
//
//     this.state={ videos: []};
//
//     YTSearch({key: API_KEY, term:'surfboards'},(videos)=>{
//       this.state.setState({videos}) //e come se facessi this.state.setState({videos:videos})
//     });
//   }
//
//
//   render(){
//
//       return(
//         <div>
//           <SearchBar />
//         </div>
//
//       );
//
//
//   }
//
//
// }
//
//
// ReactDOM.render(<App />,document.querySelector('.container'));
//
//
//
// ===============================================================
//
//
// import React, {Component} from 'react';
//
// class SearchBar extends Component {
//   constructor(props){
//     super(props);
//
//     this.state={term:''};
//
//   }
//
//   render() {
//     return (
//       <div>
//         <input placeholder="Enter text to search for gifs!" onChange={event => this.setState({term:event.target.value})} />
//       </div>
//     );
//   }
// }
//
// export default SearchBar;
