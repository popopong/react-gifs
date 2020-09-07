import React, { Component } from 'react';

import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: ''
    }
  } 

  search = (query) => {
    let giphy = require('giphy-api')('Vd51EwGiO6gGcxILb6RYXd9zi9QRRiSy');
    // Search with options using callback
    giphy.search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
    // Res contains gif data!
      this.setState({
        gifs: result.data
      });
    });
  }

  click = (choice) => {
    this.setState({
      selectedGifId: choice
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} clickedOption={this.click} />
        </div>
      </div>
    )
  }
}

export default App;
