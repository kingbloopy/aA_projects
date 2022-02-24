const FollowToggle = require('./follow_toggle');


const setEventListeners = () => {
  // console.log($('.follow-toggle'));
  $('.follow-toggle').each((index, button) => {
    // console.log(button);
    new FollowToggle(button);
  })
}

$(setEventListeners);