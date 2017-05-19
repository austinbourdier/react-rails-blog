/**
 * @fileOverview The Home component.
 */

import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.submitImage = this.submitImage.bind(this);
  }

  render() {
    return (
      <div>
        <div className="card" style={{width: "30rem"}}>
          <img id='image' onLoad={this.handleImageLoaded.bind(this)} className="card-img-top" style={{height: "300px", width: 'auto'}} height='300px' width='300px' src={this.props.images ? this.props.images[0].display_sizes[0].uri : null}></img>
          <div className="card-block">
            <h4 className="card-title">In one word, what do you see?</h4>
            <div className="form-group row">
              <label htmlFor="answer-input" className="col-2 col-form-label" style={{'paddingTop': '8px'}}>Answer</label>
              <div className="col-10">
                <input className="form-control" type="text" style={{width: "100%"}} value={this.props.answerText} onChange={this.props.updateAnswerText} id="answer-input" />
              </div>
            </div>
            <button disabled={this.props.submitting} href="#" className="btn btn-primary" style={{width: "100%"}} onClick={this.submitImage}>Submit!</button>
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
    const imageUrl = this.props.images[0] ? this.props.images[0].display_sizes[0].uri : "";
    const tags = this.props.images[0] ? this.props.images[0].tags : "";
    this.props.submitImageAnswer(this.props.answerText, answerTime, {
      image_url: imageUrl,
      tags: tags
    })
    this.props.fetchImages();
    document.getElementById('answer-input').focus();
  }

  componentDidMount() {
    document.getElementById('answer-input').focus();
    this.props.fetchImages();
  }

}

/** @const {Object} propTypes definition */
Home.propTypes = {
  images: React.PropTypes.array
};
