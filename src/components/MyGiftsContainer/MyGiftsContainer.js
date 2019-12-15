import React, { Component } from "react";
import NoResults from "@components/NoResults";
import Loader from "@components/Loader";
import { connect } from "react-redux";
import { updateWishlist } from "@actions/updateGiftsList";
import List from "@components/List";

class MyGiftsContainer extends Component {
  async componentDidMount() {
    const { userId } = this.props;
    this.props.updateWishlist(userId.api_id);
  }

  render() {
    const { giftsList, isLoading, error, userId } = this.props;
    if (error) {
      return <div>{error}</div>;
    } else if (isLoading) {
      return <Loader />;
    } else {
      if (giftsList.length) {
        return <List products={giftsList} currentUserId={userId.vk_id} />;
      } else return <NoResults>Кажется, ты не любишь подарки</NoResults>;
    }
  }
}

const mapStateToProps = ({ userId, giftsList }) => {
  return {
    ...userId,
    ...giftsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateWishlist: id => dispatch(updateWishlist(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyGiftsContainer);
