import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import './App.css';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchResults: [
        /* this is a hard coded value and will change later */
        {
          name:"99 Problems",
          artist: "Jay-Z",
          album: "The Black Album",
          id: 0
        }
      ]
    }
  }

  render(){
    return (
      <div>
         <h1>Ja<span className="highlight">mmm</span>ing</h1>
         <div className="App">
           {/* Add a SearchBar component */}
           <div className="App-playlist">
             <SearchResults searchResults={this.state.searchResults} />
             {/* Add a Playlist component */}
           </div>
         </div>
       </div>
     );
  }
}

export default App;
