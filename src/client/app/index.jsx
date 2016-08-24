import React from 'react';
import SearchBox from './SearchBox.jsx';
import Results from './Results.jsx';
import axios from 'axios';
import superagent from 'superagent';

import {render} from 'react-dom';

class App extends React.Component {

  constructor(props) {
  super(props);
  this.state = {searchResults: []};
  this.search = this.search.bind(this);
  this.search2 = this.search2.bind(this);
}

  showResults(response){
      this.setState({
          searchResults: response.data
      })
  }
 search(url)
  {
    superagent.get(url)
      .accept('json')
      .end(function(err, res) {
          if (err) throw err;
            //this.setBookListState(res);
            console.log(res);
          });
  }
  search2(url)
   {
     axios.get(url)
             .then(function (response) {console.log(response);});
   }
  componentDidMount(){
    this.search2('https://api.github.com/users/mralexgray/repos');
  }
  render () {

    return <div>
                <h5>App</h5>
                <SearchBox  />
                <Results />
            </div>;
  }
}
render(<App />, document.getElementById('app'));
