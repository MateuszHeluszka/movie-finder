import React from 'react';
import Button from '../../atoms/Button';
import './SearchItem.css';

export default class SearchItem extends React.Component {
  state = {
    ready: false,
    error: false,
  };

  componentDidMount() {
    if (this.props.poster_path === null) {
      this.setReady();
    }
  }

  setReady = () => {
    this.setState({ ready: true });
  };

  _handleImageLoaded = () => {
    this.setReady();
  };

  _handleImageError = () => {
    this.setState({ error: true, ready: true });
  };

  render() {
    return (
      <section
        className={
          this.state.ready === false ? 'search-item hidden' : 'search-item'
        }>
        <div
          className={
            this.state.error === false
              ? 'search-item__cover'
              : 'search-item__cover error'
          }>
          {this.state.error === false &&
            this.props.poster_path !== null && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${
                  this.props.poster_path
                }`}
                onLoad={this._handleImageLoaded}
                onError={this._handleImageError}
                alt="poster"
              />
            )}
        </div>
        <div className="search-item__inner">
          <div className="search-item__desc">
            <h2>{this.props.title}</h2>
            <span>Rate: {this.props.vote_average}</span>
            <Button
              onClick={() => {
                this.props.showDetails(this.props.id);
              }}>
              More
            </Button>
          </div>
        </div>
      </section>
    );
  }
}
