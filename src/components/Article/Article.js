import React from "react";
import ArticleBottomBar from "../ArticleBottomBar/ArticleBottomBar";

import gungnirFrame from "../../assets/gungnir-frame.svg";

import wpmIntervalCalculator from "../../actions/wpm-interval-calculator";
import DisplayScreen from "../DisplayScreen/DisplayScreen";
import PageNumberAndWpmCounter from "../PageNumberAndWpmCounter/PageNumberAndWpmCounter";
import ControlButtons from "../ControlButtons/ControlButtons";
import AppInputs from "../AppInputs/AppInputs";
import separateWords from "../../actions/separate-words";

import "./Article.scss";
import Axios from "axios";

import htmlToText from 'html-to-text';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.readingMaterial = 'content';

    this.timer = false;

    // Default values
    this.state = {
      readingMaterial: '',
      currentDisplayedText: "",
      currentDisplayedIndex: 0,
      wordsPerDisplay: 1,
      separatedWords: [],
      playing: false,
      wpm: 240,
      content: '',
      showContent: true,
      speedRead: false
    };
  }

  contentContainer = React.createRef();

  componentDidMount() {

    Axios.post('https://odin-pocket-client.herokuapp.com/pocket/scrape', {
      key: localStorage.getItem('myKey'),
      url: this.props.location.state.url
    })
         .then(result => {this.contentContainer.current.innerHTML = result.data.article.replace(/\\/g,'');

         const text = htmlToText.fromString(result.data.article.replace(/\\/g,''),{
           ignoreHref: true,
           ignoreImage: true
         })
         
         this.setState({readingMaterial: text})
        })

    // Axios.get('https://odin-pocket-client.herokuapp.com/pocket/fake')
    //      .then(result => this.contentContainer.current.innerHTML = result.data.article.replace(/\\/g,''))

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.playing === false && this.state.playing === true) {
      const intervalTiming = wpmIntervalCalculator(
        this.state.wpm,
        this.state.wordsPerDisplay
      );

      // start interval to play
      this.timer = setInterval(() => {
        const currentText = this.state.separatedWords[
          this.state.currentDisplayedIndex
        ];

        if (undefined === currentText) {
          clearInterval(this.timer);
          this.setState({
            currentDisplayedIndex: 0,
            currentDisplayedText: ""
          });
          return;
        }

        this.setState({
          currentDisplayedIndex: this.state.currentDisplayedIndex + 1,
          currentDisplayedText: currentText
        });
      }, intervalTiming);
    }

    if (prevState.playing === true && this.state.playing === false) {
      // start interval to play
      clearInterval(this.timer);
      this.timer = false;
    }
  }

  updateWordSettings() {
    this.setState({
      separatedWords: separateWords(
        this.state.readingMaterial,
        this.state.wordsPerDisplay
      )
    });
  }

  stopReading = () => this.setState({ playing: false });

  startReading = () => this.setState({ playing: true });

  resetReading = () => {
    this.setState({
      playing: false,
      currentDisplayedIndex: 0,
      currentDisplayedText: ""
    });
  };

  handleChangeWPM = event => {
    this.setState({
      wpm: Number(event.target.value)
    });

    this.resetReading();
  };

  handleChangeWordsPerDisplay = event => {
    const count = Number(event.target.value);
    this.setState({
      wordsPerDisplay: count,
      separatedWords: separateWords(this.state.readingMaterial, count)
    });

    this.resetReading();
  };

  speedRead = () => {
    this.updateWordSettings();

    this.setState({
      showContent: !this.state.showContent,
      speedRead: !this.state.speedRead
    });
  };

  render() {
    return (
      <div className="article">
        <div ref={this.contentContainer} className={this.state.speedRead ? "article__textContainer--grey" : "article__textContainer"}>
        </div>
        {this.state.speedRead === true ? (
          <div>
            <img
              className="article__frame"
              src={gungnirFrame}
              alt="gungnir-frame"
            />
          </div>
        ) : null}
        {this.state.speedRead === true ? (
          <div className="article__speed-reader">
            <DisplayScreen
              className="article__display-screen"
              text={this.state.currentDisplayedText}
            />
            <PageNumberAndWpmCounter
              currentIndex={this.state.currentDisplayedIndex}
              total={this.state.separatedWords.length}
              wpm={this.state.wpm}
            />

            <AppInputs
              playing={this.state.playing}
              wpm={this.state.wpm}
              wordsPerDisplay={this.state.wordsPerDisplay}
              handleChangeWPM={this.handleChangeWPM}
              handleChangeWordsPerDisplay={this.handleChangeWordsPerDisplay}
            />
            <ControlButtons
              playing={this.state.playing}
              stop={this.stopReading}
              start={this.startReading}
              reset={this.resetReading}
            />
          </div>
        ) : null}
        
        <ArticleBottomBar clickHandler={this.speedRead} />
      </div>
    );
  }
}

export default Article;
