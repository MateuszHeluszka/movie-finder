import React from 'react';
import SearchItem from '../SearchItem';
import SearchDetails from '../SearchDetails';
import './SearchResults.css';

export default class SearchResults extends React.Component {
  render() {
    return (
      <section
        className={
          this.props.isReady === false
            ? 'search-results'
            : 'search-results active'
        }>
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>
              <SearchItem {...item} showDetails={this.props.showDetails} />
            </li>
          ))}
        </ul>
        {this.props.message !== '' && <p>{this.props.message}</p>}
        <SearchDetails
          details={this.props.details}
          hideDetails={this.props.hideDetails}
        />
      </section>
    );
  }
}
