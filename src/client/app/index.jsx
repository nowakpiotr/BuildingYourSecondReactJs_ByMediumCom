import React from 'react';
import SearchBox from './SearchBox.jsx';
import Results from './Results.jsx';
import axios from 'axios';
import superagent from 'superagent';
//import superagent from 'superagent';
var $ = require("jquery");

import {render} from 'react-dom';

class App extends React.Component {

  constructor(props) {
  super(props);
  this.state = {searchResults: []};
  this.search = this.search.bind(this);
  this.search0 = this.search0.bind(this);
  this.search2 = this.search2.bind(this);
  this.showResults = this.showResults.bind(this);
}

  showResults(response){

      this.setState({
          searchResults: response
      });
  }
 search0(url)
  {
    superagent.get(url)
    .end((error, response) => {
        if (!error && response) {
            this.showResults(response.body);
            //this.setState({ searchResults: response.body });
        } else {
            console.log('There was an error fetching from GitHub', error);
        }
    });
  }
  search(URL){
    $.ajax({
        type: "GET",
        dataType: 'jsonp',
        url: URL,
        success: function(response){
            this.showResults(response.results);
        }.bind(this)
    });
}
  search2(url)
   {
     axios.get(url)
             .then(function (response)
                    {
                      console.log(response.data);
                      //this.showResults(response);
                    });
   }
  componentDidMount(){
      this.search('https://itunes.apple.com/search?term=fun');
  }
  render () {

    return <div>
                <h5>App</h5>
                <SearchBox search={this.search} />
                <Results searchResults={this.state.searchResults} />
            </div>;
  }
}
render(<App />, document.getElementById('app'));
