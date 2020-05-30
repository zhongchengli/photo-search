import React, { Component } from "react";
import { Photos } from "./Photos";
import { Tags } from "./Tags";
import { Pagination } from "./Pagination";
import SearchBar from "./SearchBar";


export default class App extends Component {
  state = {
    total: 0,
    total_pages: 0,
    results: [],
    query: '',
    curr_page: 1
  }

  searchPhotos = async (query, curr_page) => {
    const url = `https://api.unsplash.com/search/photos?client_id=kxFcWqxQgzwyAgCCTrBJJZm4caXqR_KlqbIjcwko6T8&page=${curr_page}&per_page=12&auto=format&query=${query}`

    try {
      const result = await fetch(url);

      const resultJson = await result.json();

      this.setState({
        ...resultJson
      })
    } catch (ex) {
      console.error(ex)
    }
  }

  handleSubmit = async (query, curr_page) => {
    if (this.state.query === query && this.state.curr_page === curr_page) {
      return null
    }
    this.setState({ query, curr_page })
    await this.searchPhotos(query, curr_page);
  }

  gotoPage = async (currPage) => {
    if (this.state.curr_page === currPage.page) {
      return null
    }
    this.setState({ curr_page: currPage.page })

    await this.searchPhotos(this.state.query, currPage.page);
  }

  render() {

    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} inputRef={el => this.inputElement = el} />
        <Tags photoResults={this.state.results} currentSearch={this.state.query} />
        <Pagination totalPages={this.state.total_pages} currPage={this.state.curr_page} gotoPage={this.gotoPage} />
        <Photos photoResults={this.state.results} />
      </div>
    )
  }
}
