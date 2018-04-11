import React, { Component } from 'react';
import { findMovies, getMovie } from '../../../services/api';
import SearchBar from '../../molecules/SearchBar';
import SearchResults from '../../molecules/SearchResults';
import './Search.css';

class Search extends Component {
  state = {
    value: '',
    error: false,
    loading: false,
    debounce: null,
    message: '',
    results: [],
    details: {
      visible: false,
      data: null,
    },
  };

  onChange = e => {
    /**
     * Handle input change
     *
     * @param {function} e
     * @public
     */

    if (this.state.debounce) {
      clearTimeout(this.state.debounce);
    }

    this.setState({
      value: e.target.value,
      message: '',
      debounce: setTimeout(() => this.search(this.state.value), 1000),
    });
  };

  search = query => {
    /**
     * Call api to find movies by passed query
     *
     * @param {string} query
     * @public
     */

    if (query !== undefined && query !== '') {
      this.setState({
        loading: true,
      });

      findMovies(`${query}`)
        .then(res => {
          if (res.total_results === 0) {
            this.setState({
              loading: false,
              error: false,
              results: [],
              message: 'No match results.',
            });
          } else {
            this.setState({
              loading: false,
              results: [...res.results],
            });
          }
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false,
          });
        });
    } else {
      this.setState({
        results: [],
        error: false,
      });
    }
  };

  showDetails = id => {
    /**
     * Call api to find movie details and show modal
     *
     * @param {number} id
     * @public
     */
    getMovie(id)
      .then(res => {
        this.setState({
          details: {
            visible: true,
            data: res,
          },
        });
      })
      .catch(error => {
        this.setState({
          message: error,
        });
      });
  };

  hideDetails = () => {
    this.setState({
      details: {
        visible: false,
        data: null,
      },
    });
  };

  render() {
    return (
      <section className="search">
        <SearchBar
          loading={this.state.loading}
          onChange={this.onChange}
          value={this.state.value}
          type="search"
        />
        {this.state.error === true && (
          <p className="error">An error occured, try again.</p>
        )}
        <SearchResults
          showDetails={this.showDetails}
          hideDetails={this.hideDetails}
          details={this.state.details}
          items={this.state.results}
          message={this.state.message}
        />
      </section>
    );
  }
}

export default Search;
