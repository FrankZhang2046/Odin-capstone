import React, { Component } from "react";
import "./FeedlyCardContainer.scss";
import Card from "../Card/Card";
import Axios from "axios";
import FeedlyCard from "../FeedlyCard/FeedlyCard";

export default class FeedlyCardContainer extends Component {
  state = {
    articles: []
  };

  componentDidMount() {}

  componentDidUpdate() {
    if (this.props.feedlyCategory) {

      const feedlyCategory = this.props.feedlyCategory;

      Axios.post("http://localhost:8080/feedly/get", {
        category: feedlyCategory
      }).then(result => this.setState({ articles: result.data }));
    }
  }

  render() {
    return (
      <div className="feedlyCardContainer">
        {/* {this.state.articles.map(article => {
                    return <Card article={article}/>
                })} */}
        {this.state.articles.map(article => {
          return <FeedlyCard article={article} />;
        })}
      </div>
    );
  }
}
