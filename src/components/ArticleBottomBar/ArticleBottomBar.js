import React from "react";
import "./ArticleBottomBar.scss";
import spearheadIcon from "../../assets/spearhead.svg";
import horseIcon from "../../assets/sleipnir-horse-icon.svg";
import verticalBar from "../../assets/Line.svg";
import SweetAlert from "sweetalert2-react";

class ArticleBottomBar extends React.Component {
  state = { show: false };

  callSpeedReader = () => {
    this.props.clickHandler();
  };

  webScrape = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div className="articleBottomBar">
        <img src={spearheadIcon} alt="spearhead-icon" />
        <p
          onClick={this.callSpeedReader}
          className="articleBottomBar__speed-read"
        >
          SPEED READ
        </p>
        <img src={verticalBar} alt="vertical-bar" />

        <img
          className="articleBottomBar__horse"
          src={horseIcon}
          alt="horse-icon"
        />

        <p onClick={this.webScrape} className="articleBottomBar__long-form">LONG-FORM</p>
        <SweetAlert
          show={this.state.show}
          title="uh-oh"
          text="This already is the long-form content, please don't abuse the web-scraping functionality."
          onConfirm={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}

export default ArticleBottomBar;
