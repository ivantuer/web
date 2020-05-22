// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WYSIWYGModel = /*#__PURE__*/function () {
  function WYSIWYGModel() {
    _classCallCheck(this, WYSIWYGModel);
  }

  _createClass(WYSIWYGModel, [{
    key: "italic",
    value: function italic() {
      document.execCommand("italic");
    }
  }, {
    key: "bold",
    value: function bold() {
      document.execCommand("bold");
    }
  }, {
    key: "underscore",
    value: function underscore() {
      document.execCommand("underline");
    }
  }, {
    key: "color",
    value: function color(e) {
      document.execCommand("styleWithCSS", false, true);
      document.execCommand("foreColor", false, e.target.value);
    }
  }, {
    key: "case",
    value: function _case() {
      var sel, range;

      if (window.getSelection) {
        sel = window.getSelection();

        if (sel.rangeCount) {
          range = sel.getRangeAt(0);
          var textToReplace = "".concat(range.cloneContents().textContent);

          if (textToReplace === textToReplace.toUpperCase()) {
            textToReplace = textToReplace.toLowerCase();
          } else {
            textToReplace = textToReplace.toUpperCase();
          }

          range.deleteContents();
          range.insertNode(document.createTextNode(textToReplace));
        }
      } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();

        var _textToReplace = range.cloneContents();

        if (_textToReplace === _textToReplace.toUpperCase()) {
          _textToReplace = _textToReplace.toLowerCase();
        } else {
          _textToReplace = _textToReplace.toUpperCase();
        }

        range.text = _textToReplace;
      }
    }
  }]);

  return WYSIWYGModel;
}();

var _default = new WYSIWYGModel();

exports.default = _default;
},{}],"js/controller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _model = _interopRequireDefault(require("./model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WYSIWYGController = /*#__PURE__*/function () {
  function WYSIWYGController() {
    _classCallCheck(this, WYSIWYGController);

    this.WYSIWYGModel = _model.default;
  }

  _createClass(WYSIWYGController, [{
    key: "toggleItalic",
    value: function toggleItalic(e) {
      _model.default.italic(e);
    }
  }, {
    key: "toggleBold",
    value: function toggleBold(e) {
      _model.default.bold(e);
    }
  }, {
    key: "toggleUnderScore",
    value: function toggleUnderScore(e) {
      console.log(e);

      _model.default.underscore(e);
    }
  }, {
    key: "changeColor",
    value: function changeColor(e) {
      _model.default.color(e);
    }
  }, {
    key: "toggleCase",
    value: function toggleCase(e) {
      _model.default.case(e);
    }
  }]);

  return WYSIWYGController;
}();

var _default = new WYSIWYGController();

exports.default = _default;
},{"./model":"js/model.js"}],"js/view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WYSIWYGView = /*#__PURE__*/function () {
  function WYSIWYGView(_ref) {
    var italicBtn = _ref.italicBtn,
        boldBtn = _ref.boldBtn,
        underBtn = _ref.underBtn,
        colorBtn = _ref.colorBtn,
        caseBtn = _ref.caseBtn,
        field = _ref.field,
        countSpan = _ref.countSpan;

    _classCallCheck(this, WYSIWYGView);

    this.italicBtn = italicBtn;
    this.boldBtn = boldBtn;
    this.underBtn = underBtn;
    this.colorBtn = colorBtn;
    this.caseBtn = caseBtn;
    this.field = field;
    this.countSpan = countSpan;
    this.WordCountWorker = new Worker("/wordCountWorker.9431f181.js");
    this.initAllListeners();
    this.WordCountWorker.postMessage(field.innerText);
  }

  _createClass(WYSIWYGView, [{
    key: "triggerWordCount",
    value: function triggerWordCount(e) {
      var text = e.target.innerText;
      this.WordCountWorker.postMessage(text);
    }
  }, {
    key: "renderWordCount",
    value: function renderWordCount(_ref2) {
      var data = _ref2.data;
      this.countSpan.innerText = data;
    }
  }, {
    key: "initAllListeners",
    value: function initAllListeners() {
      this.italicBtn.addEventListener("click", _controller.default.toggleItalic);
      this.boldBtn.addEventListener("click", _controller.default.toggleBold);
      this.underBtn.addEventListener("click", _controller.default.toggleUnderScore);
      this.colorBtn.addEventListener("change", _controller.default.changeColor);
      this.caseBtn.addEventListener("click", _controller.default.toggleCase);
      this.WordCountWorker.addEventListener("message", this.renderWordCount.bind(this));
      this.field.addEventListener("input", this.triggerWordCount.bind(this));
    }
  }]);

  return WYSIWYGView;
}();

var _default = WYSIWYGView;
exports.default = _default;
},{"./controller":"js/controller.js","./wordCountWorker.js":[["wordCountWorker.9431f181.js","js/wordCountWorker.js"],"wordCountWorker.9431f181.js.map","js/wordCountWorker.js"]}],"index.js":[function(require,module,exports) {
"use strict";

var _view = _interopRequireDefault(require("./js/view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var boldBtn = document.getElementById("boldBtn");
var italicBtn = document.getElementById("italicBtn");
var underBtn = document.getElementById("underBtn");
var colorBtn = document.getElementById("colorBtn");
var caseBtn = document.getElementById("caseBtn");
var field = document.getElementById("field");
var countSpan = document.getElementById("countSpan");
var a = new _view.default({
  boldBtn: boldBtn,
  italicBtn: italicBtn,
  underBtn: underBtn,
  colorBtn: colorBtn,
  caseBtn: caseBtn,
  field: field,
  countSpan: countSpan
});
},{"./js/view":"js/view.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53759" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map