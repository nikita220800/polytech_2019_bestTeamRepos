import React from "react";
import PropTypes from "prop-types";

import Header from "@components/Header";
import SearchInput from "@components/SearchInput";
import PageName from "@components/PageName";
import SuggestionsListContainer from "@components/SuggestionsListContainer"

import Logo from "@img/wishlist.png";

import "./Main.css";

class Main extends React.Component {
  static propTypes = {
    logoPath: PropTypes.string
  };

  static defaultProps = {
    logoPath: Logo
  };

  render() {
    const { logoPath } = this.props;

    return (
      <div className="main-Container">
        <Header />
        <PageName name="Wishlist" logoPath={logoPath} />
        <SearchInput />
        <SuggestionsListContainer />
      </div>
    );
  }
}

export default Main;
