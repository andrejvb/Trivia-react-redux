import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../compomemts/Header';

class Feedback extends Component {
  render() {
    const { assertions, score, history } = this.props;
    console.log(score);
    console.log(assertions);
    const asserts = 3;
    return (
      <section>
        <Header />
        <div className="feedbackbox">
          { assertions >= asserts
            ? <span data-testid="feedback-text">Well Done!</span>
            : <span data-testid="feedback-text">Could be better...</span> }
          <span data-testid="feedback-total-score">
            { score }
          </span>
          <span
            data-testid="feedback-total-question"
          >
            {assertions}
          </span>
        </div>
        <button
          data-testid="btn-play-again"
          type="button"
          onClick={ () => {
            history.push('/');
          } }
        >
          Play Again
        </button>
        <button
          data-testid="btn-ranking"
          type="button"
          onClick={ () => {
            history.push('/ranking');
          } }
        >
          Ranking
        </button>
      </section>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  score: PropTypes.number,
};

Feedback.defaultProps = {
  assertions: 0,
  score: 0,
  history: PropTypes.shape({}),
};

const mapStateToProps = (globalState) => ({
  ...globalState.player,
});

export default connect(mapStateToProps)(Feedback);
