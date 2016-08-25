import React from 'react';
import ResultItem from './ResultItem.jsx';

class Results extends React.Component {

    constructor(props) {
    super(props);
  }

  render () {
    var resultItems = this.props.searchResults.map(function(result) {
        return <ResultItem key={result.trackId} trackName={result.trackName} />
    });

    return <div>
                <h5>Results</h5>
                {resultItems}
            </div>;
  }
}
export default Results;
