import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    feedbackGiven: false,
  }

  onClickFeedback = () => {
    this.setState(prevState => ({feedbackGiven: !prevState.feedbackGiven}))
  }

  render() {
    const {feedbackGiven} = this.state
    const {resources} = this.props

    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="app-container">
        {feedbackGiven ? (
          <div className="feedback-container">
            <img alt="love emoji" className="emoji" src={loveEmojiUrl} />
            <h1 className="feedback-heading">Thank You!</h1>
            <p className="feedback-text">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="feedback-container">
            <h1 className="feedback-heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-list">
              {emojis.map(eachEmoji => (
                <li key={eachEmoji.id}>
                  <button
                    type="button"
                    className="btn"
                    onClick={this.onClickFeedback}
                  >
                    <img
                      alt={eachEmoji.name}
                      className="emoji"
                      src={eachEmoji.imageUrl}
                    />
                    <p className="emoji-name">{eachEmoji.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
