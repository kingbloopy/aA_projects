/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

class FollowToggle { 
  // turns a button into a toggle that will follow/unfollow a user.
  constructor(ele){
    this.$ele = $(ele);
    // this.button = $('.follow-toggle');
    // console.log(this.$ele.data('userid'));
    this.userId = this.$ele.data('userid');
    this.followState = this.$ele.data('followstate');
    this.render();
  }

  render(){
    if (this.followState === 'unfollowed'){
      this.$ele.text('Follow!');
    } else {
      this.$ele.text('Unfollow!');
    }
  }

}

module.exports = FollowToggle;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");


const setEventListeners = () => {
  // console.log($('.follow-toggle'));
  $('.follow-toggle').each((index, button) => {
    // console.log(button);
    new FollowToggle(button);
  })
}

$(setEventListeners);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map