import React from 'react';
import Button from '../../atoms/Button';
import loader from '../../../assets/img/loader.svg';
import './SearchDetails.css';

export default class SearchDetails extends React.Component {
  state = {
    visible: false,
    data: null,
    imageReady: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.details.visible !== this.state.visible) {
      this.setState({
        visible: nextProps.details.visible,
        data: nextProps.details.data,
      });

      if (
        nextProps.details.data &&
        nextProps.details.data.backdrop_path === null
      ) {
        this._handleImageLoaded();
      }
    }
  }

  _handleImageLoaded = () => {
    this.setState({ imageReady: true });
  };

  _handleClose = () => {
    this.setState({ imageReady: false });
    this.props.hideDetails();
  };

  render() {
    return (
      <section
        className={
          this.state.visible === false
            ? 'search-details'
            : 'search-details active'
        }>
        <Button className="search-details__close" onClick={this._handleClose}>
          Close
        </Button>
        {this.state.imageReady === false && (
          <img src={loader} className="loader" alt="Loader" />
        )}
        {this.state.data && (
          <div
            className={
              this.state.imageReady === false
                ? 'search-details__wrapper hidden'
                : 'search-details__wrapper'
            }>
            <div className="search-details__top">
              {this.state.data.backdrop_path !== null && (
                <img
                  src={`http://image.tmdb.org/t/p/original/${
                    this.state.data.backdrop_path
                  }`}
                  onLoad={this._handleImageLoaded}
                  onError={this._handleImageLoaded}
                  alt="backdrop"
                  className={
                    this.state.imageReady === false
                      ? 'search-details__backdrop hidden'
                      : 'search-details__backdrop'
                  }
                />
              )}
            </div>
            <div className="search-details__content">
              <p>
                <strong>Title: </strong> <span>{this.state.data.title}</span>
              </p>
              <p>
                <strong>Original title: </strong>
                <i>{this.state.data.original_title}</i>
              </p>
              <p>
                <strong>Release date: </strong>
                <span>{this.state.data.release_date}</span>
              </p>
              <p>
                <strong>Overview: </strong>
                <span>{this.state.data.overview}</span>
              </p>
              <p>
                <strong>Rate: </strong>
                <span>{this.state.data.vote_average}</span>
              </p>
              <p>
                <strong>Votes: </strong>
                <span>{this.state.data.vote_count}</span>
              </p>
            </div>
          </div>
        )}
      </section>
    );
  }
}
