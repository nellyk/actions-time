module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 430:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const core = __webpack_require__(418);
const { context, GitHub } = __webpack_require__(88);


try {
const githubToken = core.getInput('GITHUB_TOKEN');
const octokit = new GitHub(githubToken);
if (context.eventName === 'pull_request') {
    if (context.payload.pull_request === null) {
        core.setFailed('No pull request found.');
        return;
      }

  const nameToGreet = core.getInput('who-to-greet');
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  const time =  (addDays(new Date(),3)).toDateString();
  const body = `Hello ${nameToGreet}! thank you for your Pull request. We aim to review this pull request before ${time} `
  const checkStatus = octokit.issues.createComment({
    ...context.repo,
    issue_number: context.payload.issue.number,
    body,
  });
  core.setOutput("time",time);

}
  
} catch (error) {
  core.setFailed(error.message);
}

/***/ }),

/***/ 418:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 88:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__webpack_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(430);
/******/ })()
;