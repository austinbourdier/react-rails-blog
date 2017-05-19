/**
 * @fileOverview The Posts container.
 */

import { connect } from 'react-redux';

import Home from '../components/home.component';
import { fetchImages, updateAnswerText, submitImageAnswer } from '../actions/home.action';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(state) {
  return {
    images: state.Home.images,
    submitting: state.Home.submitting,
    answerText: state.Home.answerText
  };
}

/**
 * Map dispatch actions to props.
 *
 * @param {Function} dispatch The dispatch func.
 */
function mapDispatchToProps(dispatch) {
  return {
    fetchImages: () => {
      dispatch(fetchImages());
    },
    updateAnswerText: (event) => {
      dispatch(updateAnswerText(event.target.value));
    },
    submitImageAnswer: (answer, answerTime, image) => {
      dispatch(updateAnswerText(''));
      dispatch(submitImageAnswer(answer, answerTime, image));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
