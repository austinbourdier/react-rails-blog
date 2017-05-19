/**
 * @fileOverview The Home component.
 */

import React from 'react';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.submitImage = this.submitImage.bind(this);
  }

  render() {
    let img;
    if(this.props.images) {
      img = <img onLoad={this.handleImageLoaded.bind(this)} className='card-img-top img-responsive' id='image' src={this.props.images ? this.props.images[0].display_sizes[0].uri : null}></img>;
    } else {
      img = <img className='card-img-top img-responsive' id='image-loading' src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'></img>;
    }
    return (
      <div>
        <div className='card' id='card-container'>
          {img}
          <div className='card-block'>
            <h1 className='card-title' id='title-instruction'>In one word, what do you see?</h1>
            <div className='form-group row'>
              <div className='col-12'>
                <input className='form-control' placeholder='type here...' type='text' style={{width: '100%'}} value={this.props.answerText} onChange={this.props.updateAnswerText} id='answer-input' autoFocus/>
              </div>
            </div>
            <button disabled={this.props.submitting} href='#' className='btn btn-primary' onClick={this.submitImage} id='submit-button'>Submit!</button>
          </div>
        </div>
      </div>
    );
  }

  handleImageLoaded () {
    this.imageLoaded = new Date().getTime();
  }

  submitImage () {
    const answerTime = new Date().getTime() - this.imageLoaded;
    const imageUrl = this.props.images[0] ? this.props.images[0].display_sizes[0].uri : '';
    const tags = this.props.images[0] ? this.props.images[0].tags : '';
    this.props.submitImageAnswer(this.props.answerText, answerTime, {
      imageUrl: imageUrl,
      tags: tags
    });
    this.props.fetchImages();
    document.getElementById('answer-input').focus();
  }

  componentDidMount() {
    this.props.fetchImages();
    document.getElementById('answer-input').focus();
  }

}

/** @const {Object} propTypes definition */
Home.propTypes = {
  images: React.PropTypes.array,
  submitting: React.PropTypes.bool,
  answerText: React.PropTypes.string,
  fetchImages: React.PropTypes.func,
  submitImageAnswer: React.PropTypes.func,
  updateAnswerText: React.PropTypes.func
};
