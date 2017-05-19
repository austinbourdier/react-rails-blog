/**
 * @fileOverview Posts related actions.
 */

import axios from 'axios';

import {
  FETCH_IMAGE_SUCCESS, UPDATE_ANSWER_TEXT, SUBMIT_ANSWER_SUCCESS, SUBMITTING_ANSWER
} from '../constants/reducer-actions.constant';

/**
 * Fetch posts.
 *
 * @return {Function} The action handler.
 */

export const fetchImages = () => {
  return function(dispatch) {
    const choices = [
      {name:'plane', tags: ['airplane', 'airplanes', 'plane', 'planes', 'fly', 'flying', 'travel', 'traveling'], limit: 20},
      {name:'flower', tags: ['flower', 'flowers', 'plant', 'plants', 'nature', 'grass'], limit: 20},
      {name:'pig', tags: ['pig', 'pigs', 'animal', 'farm', 'mud', 'muddy'], limit: 20},
      {name:'bird', tags: ['bird', 'birds', 'fly', 'sky', 'flying'], limit: 20},
      {name:'rock', tags: ['stone', 'rock', 'rocks', 'stones', 'earth', 'boulder'],limit: 20},
      {name:'snow', tags: ['snow', 'cold', 'winter', 'ice', 'snowy'], limit: 20},
      {name:'tree', tags: ['tree', 'trees', 'nature', 'green', 'bush', 'leaves', 'leaf'], limit: 20},
      {name:'mouse', tags: ['mouse', 'mice', 'rat', 'rats', 'rodent', 'rodents'], limit: 20},
      {name:'wine', tags: ['wine', 'alcohol', 'glass', 'drink', 'purple', 'liquid'], limit: 20},
      {name:'beer', tags: ['beer', 'alcohol', 'drink'], limit: 20},
      {name:'dog', tags: ['dog', 'dogs', 'animal', 'animals', 'pet', 'pets'], limit: 20},
      {name:'cat', tags: ['cat', 'cats', 'animal', 'animals', 'pet', 'pets'], limit: 20},
      {name:'horse', tags: ['horse', 'horses', 'animal', 'animals', 'farm'], limit: 20},
      {name:'cow', tags: ['cow', 'cows', 'animal', 'animals', 'farm'], limit: 20}
    ];
    const randomRequest = choices[Math.floor(Math.random() * choices.length)];
    axios.get('https://api.gettyimages.com/v3/search/images?phrase=' + randomRequest.name +
      '&minimum_size=medium&fields=comp&orientations=Square&page_size=1&page=' +
      Math.ceil(Math.random()*randomRequest.limit), {headers: {
        'Api-Key': 't2z35c9frtrpqmkzwjktbq2j'
      }})
        .then((res) => {
          res.data.images.forEach((image) => {
            image.tags = randomRequest.tags;
          });
          dispatch({
            type: FETCH_IMAGE_SUCCESS,
            images: res.data.images
          });
          dispatch({
            type: SUBMITTING_ANSWER,
            submitting: false
          });
        })
        .catch(() => {
          dispatch({
            type: SUBMITTING_ANSWER,
            submitting: false
          });
        });
  };
};

export const updateAnswerText = (answerText) => {
  return function(dispatch) {
    dispatch({
      type: UPDATE_ANSWER_TEXT,
      answerText: answerText
    });
  };
};


export const submitImageAnswer = (answer, answerTime, image) => {
  return function(dispatch) {
    dispatch({
      type: SUBMITTING_ANSWER,
      submitting: true
    });
    axios.post('/attempt/log', {answer: answer, answerTime: answerTime, image: image})
      .then((res) => {
        dispatch({
          type: SUBMIT_ANSWER_SUCCESS,
          attempt: res.attempt
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
