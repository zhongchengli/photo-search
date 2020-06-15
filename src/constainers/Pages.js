import React, { Component } from 'react';
import { connect } from 'react-redux'
import Page from '../components/Page';
import { gotoPage } from '../actions';


class Pages extends Component {

  gotoPage = (tag, page) => {
    this.props.dispatch(gotoPage(tag, page))
  }

  render() {
    const { tag, totalPages, currPage } = this.props;
    if (totalPages && totalPages > 0) {
      return (
        <Page tag={tag} totalPages={totalPages} currPage={currPage} onClick={this.gotoPage} />
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  const { tag, currPage } = state.searchRecuder
  const { totalPages } = state.photoReducer
  return {
    tag,
    currPage,
    totalPages
  }
}

export default connect(mapStateToProps)(Pages)