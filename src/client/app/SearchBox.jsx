import React from 'react';
import ReactDOM from 'react-dom';

class SearchBox extends React.Component {
constructor(props){
  super(props);
  this.createAjax = this.createAjax.bind(this);
}
createAjax(){
    var query    = ReactDOM.findDOMNode(this.refs.query).value;
    var category = ReactDOM.findDOMNode(this.refs.category).value;
    var URL      = 'https://itunes.apple.com/search?term=' + query +'&country=us&entity=' + category;
    this.props.search(URL)
}
  render () {

    return <div>
                <h5>SearchBox</h5>
                <input type="text" ref="query" />
                <select ref="category">
                  <option value="software">Apps</option>
                  <option value="movie">Films</option>
                </select>
                <input type="submit" onClick={this.createAjax} />
            </div>;
  }
}
export default SearchBox;
