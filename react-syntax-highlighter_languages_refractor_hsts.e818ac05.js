exports.ids = [56];
exports.modules = {

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hsts
hsts.displayName = 'hsts'
hsts.aliases = []
function hsts(Prism) {
  /**
   * Original by Scott Helme.
   *
   * Reference: https://scotthelme.co.uk/hsts-cheat-sheet/
   */
  Prism.languages.hsts = {
    directive: {
      pattern: /\b(?:max-age=|includeSubDomains|preload)/,
      alias: 'keyword'
    },
    safe: {
      pattern: /\d{8,}/,
      alias: 'selector'
    },
    unsafe: {
      pattern: /\d{1,7}/,
      alias: 'function'
    }
  }
}


/***/ })

};;