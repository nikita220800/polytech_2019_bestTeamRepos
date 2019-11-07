import React from "react";
import PropTypes from "prop-types";

import LinkItem from "@components/LinkItem";
import Routes from "@config/routes.js";

import relievedEmoji from "@img/relievedFace.png";
import sunglassesEmoji from "@img/wantGive.png";
import droolingFace from "@img/droolingFace.png";

import styles from "./UserTabs.module.scss";

export default class UserTabs extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.number.isRequired
  };

  static defaultProps = {
    className: null
  };

  render() {
    const { isMyProfile, id } = this.props;

    if (isMyProfile) {
      return (
        <div className={styles["buttons-group"]}>
          <LinkItem href={Routes.profile.create(id)}>
            <span className={styles["button__content"]}>
              Хочу получить{" "}
              <img
                className={styles["button__emoji"]}
                src={relievedEmoji}
                alt={styles["relieved emoji"]}
              />
            </span>
          </LinkItem>
          <LinkItem href={Routes.profile.createWhatIwant(id)}>
            <span className={styles["button__content"]}>
              Хочу подарить{" "}
              <img
                className={styles["button__emoji"]}
                src={sunglassesEmoji}
                alt="cool emoji with sunglasses"
              />
            </span>
          </LinkItem>
        </div>
      );
    } else {
      return (
        <div className={styles["buttons-group"]}>
          <LinkItem href={Routes.profile.create(id)}>
            <span className={styles["button__content"]}>
              Хочет получить{" "}
              <img
                className={styles["button__emoji"]}
                src={droolingFace}
                alt="drooling emoji"
              />
            </span>
          </LinkItem>
          <LinkItem href={Routes.profile.createFromMe(id)}>
            <span className={styles["button__content"]}>
              Хочу подарить{" "}
              <img
                className={styles["button__emoji"]}
                src={sunglassesEmoji}
                alt="cool emoji with sunglasses"
              />
            </span>
          </LinkItem>
        </div>
      );
    }
  }
}
