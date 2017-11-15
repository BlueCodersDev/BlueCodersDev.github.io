webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(24)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(826),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(30)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(832),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuetify_dist_vuetify_min_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuetify_dist_vuetify_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_awesome_icons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_analytics__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_analytics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_analytics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_awesome_components_Icon__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_awesome_components_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vue_awesome_components_Icon__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.









/* Register component with one of 2 methods */



// globally (in your main .js file)
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('icon', __WEBPACK_IMPORTED_MODULE_8_vue_awesome_components_Icon___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vuetify___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_7_vue_analytics___default.a, {
  id: 'UA-30026605-1',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  linkers: ['vmac.xyz', 'vmac.wordpress.com']
});

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let icons = {};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'icon',
  props: {
    name: {
      type: String,
      validator(val) {
        if (val) {
          if (!(val in icons)) {
            console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${val}".` + `\nPlesase make sure you have imported this icon before using it.`);
            return false;
          }
          return true;
        }
        console.warn(`Invalid prop: prop "name" is required.`);
        return false;
      }
    },
    scale: [Number, String],
    spin: Boolean,
    inverse: Boolean,
    pulse: Boolean,
    flip: {
      validator(val) {
        return val === 'horizontal' || val === 'vertical';
      }
    },
    label: String
  },
  data() {
    return {
      x: false,
      y: false,
      childrenWidth: 0,
      childrenHeight: 0,
      outerScale: 1
    };
  },
  computed: {
    normalizedScale() {
      let scale = this.scale;
      scale = typeof scale === 'undefined' ? 1 : Number(scale);
      if (isNaN(scale) || scale <= 0) {
        console.warn(`Invalid prop: prop "scale" should be a number over 0.`, this);
        return this.outerScale;
      }
      return scale * this.outerScale;
    },
    klass() {
      return {
        'fa-icon': true,
        'fa-spin': this.spin,
        'fa-flip-horizontal': this.flip === 'horizontal',
        'fa-flip-vertical': this.flip === 'vertical',
        'fa-inverse': this.inverse,
        'fa-pulse': this.pulse
      };
    },
    icon() {
      if (this.name) {
        return icons[this.name];
      }
      return null;
    },
    box() {
      if (this.icon) {
        return `0 0 ${this.icon.width} ${this.icon.height}`;
      }
      return `0 0 ${this.width} ${this.height}`;
    },
    ratio() {
      if (!this.icon) {
        return 1;
      }
      let { width, height } = this.icon;
      return Math.max(width, height) / 16;
    },
    width() {
      return this.childrenWidth || this.icon && this.icon.width / this.ratio * this.normalizedScale || 0;
    },
    height() {
      return this.childrenHeight || this.icon && this.icon.height / this.ratio * this.normalizedScale || 0;
    },
    style() {
      if (this.normalizedScale === 1) {
        return false;
      }
      return {
        fontSize: this.normalizedScale + 'em'
      };
    },
    raw() {
      // generate unique id for each icon's SVG element with ID
      if (!this.icon || !this.icon.raw) {
        return null;
      }
      let raw = this.icon.raw;
      let ids = {};
      raw = raw.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
        let uniqueId = getId();
        ids[id] = uniqueId;
        return ` id="${uniqueId}"`;
      });
      raw = raw.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
        let id = rawId || pointerId;
        if (!id || !ids[id]) {
          return match;
        }

        return `#${ids[id]}`;
      });

      return raw;
    }
  },
  mounted() {
    if (this.icon) {
      return;
    }
    this.$children.forEach(child => {
      child.outerScale = this.normalizedScale;
    });
    let width = 0;
    let height = 0;
    this.$children.forEach(child => {
      width = Math.max(width, child.width);
      height = Math.max(height, child.height);
    });
    this.childrenWidth = width;
    this.childrenHeight = height;
    this.$children.forEach(child => {
      child.x = (width - child.width) / 2;
      child.y = (height - child.height) / 2;
    });
  },
  register(data) {
    for (let name in data) {
      let icon = data[name];

      if (!icon.paths) {
        icon.paths = [];
      }
      if (icon.d) {
        icon.paths.push({ d: icon.d });
      }

      if (!icon.polygons) {
        icon.polygons = [];
      }
      if (icon.points) {
        icon.polygons.push({ points: icon.points });
      }

      icons[name] = icon;
    }
  },
  icons
});

let cursor = 0xd4937;
function getId() {
  return `fa-${(cursor++).toString(16)}`;
}

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Topbar__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Topbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Topbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Meetups__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Meetups___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Meetups__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Bottombar__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Bottombar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Bottombar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Topics__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Topics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Topics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Team__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Team___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_Team__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    Topbar: __WEBPACK_IMPORTED_MODULE_0__components_Topbar___default.a,
    Home: __WEBPACK_IMPORTED_MODULE_1__components_Home___default.a,
    Meetups: __WEBPACK_IMPORTED_MODULE_2__components_Meetups___default.a,
    Bottombar: __WEBPACK_IMPORTED_MODULE_3__components_Bottombar___default.a,
    Topics: __WEBPACK_IMPORTED_MODULE_4__components_Topics___default.a,
    Team: __WEBPACK_IMPORTED_MODULE_5__components_Team___default.a
  }
});

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'bottombar',
  data: () => {
    return {
      icons: {
        vuejs: __webpack_require__(36),
        vuetify: __webpack_require__(37)
      }
    };
  }
});

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Topics__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Topics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Topics__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'home',
  components: { Topics: __WEBPACK_IMPORTED_MODULE_0__Topics___default.a },
  data() {
    return {
      msg: 'Vidyasagar Machupalli',
      about: 'BlueCoders is a society of energetic developers who are passionate in exploring mobile, cloud, and cognitive solutions. We provide a stage for developers and enthusiasts working on these technologies or curious in learning more about these technologies to collaborate and learn together.',
      more: 'Let\'s group together to talk what\'s happening in Cloud & AI.'
    };
  }
});

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'meetups',
  data() {
    return {
      items: [{ title: '11.11.2017', event: 'Above Serverless and Beyond Containers', link: 'https://www.meetup.com/BlueCoders/events/244683579', type: 'talk', icon: 'mic', imgUrl: '/static/images/cards/docks.jpg' }, { title: '22.07.2017', event: 'Hands-on lab: Cognitive service chaining with Serverless Computing', link: 'https://www.meetup.com/BlueCoders/events/241194184', type: 'talk', icon: 'mic', imgUrl: '/static/images/cards/drop.jpg' }, { title: 'Since 04.08.2016', event: 'Past Meetups', link: 'https://www.meetup.com/BlueCoders', type: 'talk', icon: 'mic' }]
    };
  }
});

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'team',
  data: () => {
    return {
      title: 'Your Logo',
      posts: [{
        title: 'Blog',
        content: 'VMac Writes is hosted on Wordpress.com and has more than 100 blog posts. From Cloud to AI to Gaming.',
        imgUrl: '/static/images/cards/drop.jpg',
        more: 'https://vmacwrites.wordpress.com/'
      }, {
        title: 'Medium',
        content: 'Interesting and important technical thoughts are posted here for your reference. Clap if you like and also check my claps. #AI #ML ',
        imgUrl: '/static/images/cards/docks.jpg',
        more: 'https://medium.com/@VidyasagarMSC'
      }, {
        title: 'DZone',
        content: 'A collection of my technical articles. Catering Cloud, Cognitive, and many more...',
        imgUrl: 'https://vmacwrites.files.wordpress.com/2017/04/cropped-cropped-qtq80-tbq9tn-4.jpeg',
        more: 'https://dzone.com/users/2567192/vidyasagarmsc.html'
      }],
      links: [{
        url: 'https://vmacwrites.wordpress.com/category/cloud/',
        category: 'Cloud'
      }, {
        url: 'https://vmacwrites.wordpress.com/category/mobile/',
        category: 'Mobile'
      }, {
        url: 'https://vmacwrites.wordpress.com/category/gaming/',
        category: 'Gaming'
      }, {
        url: 'https://vmacwrites.wordpress.com/',
        category: 'More...'
      }]

    };
  }
});

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'topbar',
  data: () => {
    return {
      drawer: false,
      mini: false,
      locals: [{ title: 'About', icon: 'home', link: '/' }, { title: 'Meetups', icon: 'handshake-o', link: '/meetups' }],
      items: [{ title: 'Twitter', icon: 'twitter', link: 'https://twitter.com/Blue_Coders' }, { title: 'Meetup', icon: 'meetup', link: 'https://www.meetup.com/BlueCoders/' }, { title: 'Facebook', icon: 'facebook', link: 'https://facebook.com/bluecodersmeet' }],
      nav: {
        edge: 'right'
      }
    };
  },
  methods: {
    getTarget: function (item) {
      return item.newTab === false ? '' : '_blank';
    }
  }
});

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'topics',
  data: () => {
    return {
      skills: [{ name: 'Open Source' }, { name: 'Cloud Computing' }, { name: 'Machine Learning' }, { name: 'Artificial Intelligence' }, { name: 'Web Technology' }, { name: 'Mobile Development' }, { name: 'Data Science' }, { name: 'Cognitive Computing' }, { name: 'Computer Programming' }, { name: 'IBM Cloud' }]
    };
  }
});

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = "static/img/bluecoders.8201d16.png";

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjIyMXB4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjA0LjgsMCBMMjU2LDAgTDEyOCwyMjAuOCBMMCwwIEw1MC41NiwwIEw5Ny45MiwwIEwxMjgsNTEuMiBMMTU3LjQ0LDAgTDIwNC44LDAgWiIgZmlsbD0iIzQxQjg4MyI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0wLDAgTDEyOCwyMjAuOCBMMjU2LDAgTDIwNC44LDAgTDEyOCwxMzIuNDggTDUwLjU2LDAgTDAsMCBaIiBmaWxsPSIjNDFCODgzIj48L3BhdGg+CgkJPHBhdGggZD0iTTUwLjU2LDAgTDEyOCwxMzMuMTIgTDIwNC44LDAgTDE1Ny40NCwwIEwxMjgsNTEuMiBMOTcuOTIsMCBMNTAuNTYsMCBaIiBmaWxsPSIjMzU0OTVFIj48L3BhdGg+Cgk8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(31)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(833),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-cd63a498",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(29)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(831),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(27)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(829),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(28)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(830),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-574dec39",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(26)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(828),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(25)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(827),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    class: _vm.klass,
    style: (_vm.style),
    attrs: {
      "version": "1.1",
      "role": _vm.label ? 'img' : 'presentation',
      "aria-label": _vm.label,
      "x": _vm.x,
      "y": _vm.y,
      "width": _vm.width,
      "height": _vm.height,
      "viewBox": _vm.box
    }
  }, [_vm._t("default", [(_vm.icon && _vm.icon.paths) ? _vm._l((_vm.icon.paths), function(path, i) {
    return _c('path', _vm._b({
      key: ("path-" + i)
    }, 'path', path, false))
  }) : _vm._e(), _vm._v(" "), (_vm.icon && _vm.icon.polygons) ? _vm._l((_vm.icon.polygons), function(polygon, i) {
    return _c('polygon', _vm._b({
      key: ("polygon-" + i)
    }, 'polygon', polygon, false))
  }) : _vm._e(), _vm._v("\b\n    "), (_vm.icon && _vm.icon.raw) ? [_c('g', {
    domProps: {
      "innerHTML": _vm._s(_vm.raw)
    }
  })] : _vm._e()])], 2)
},staticRenderFns: []}

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "toolbar": ""
    }
  }, [_c('v-navigation-drawer', {
    attrs: {
      "temporary": "",
      "dark": ""
    },
    model: {
      value: (_vm.drawer),
      callback: function($$v) {
        _vm.drawer = $$v
      },
      expression: "drawer"
    }
  }, [_c('v-toolbar', {
    staticClass: "transparent",
    attrs: {
      "flat": ""
    }
  }, [_c('v-list', {
    staticClass: "pa-0"
  }, [_c('v-list-tile', {
    attrs: {
      "avatar": ""
    }
  }, [_c('v-list-tile-avatar', [_c('img', {
    attrs: {
      "src": "/static/images/bluecoders.png"
    }
  })]), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', [_vm._v("BlueCoders")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('v-list', {
    staticClass: "pt-0",
    attrs: {
      "dense": ""
    }
  }, [_c('v-divider'), _vm._v(" "), _vm._l((_vm.locals), function(local) {
    return _c('v-list-tile', {
      key: local.title,
      attrs: {
        "href": local.link
      }
    }, [_c('v-list-tile-action', [_c('icon', {
      attrs: {
        "name": local.icon
      }
    })], 1), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', [_vm._v(_vm._s(local.title))])], 1)], 1)
  }), _vm._v(" "), _vm._l((_vm.items), function(item) {
    return _c('v-list-tile', {
      key: item.title,
      attrs: {
        "href": item.link,
        "target": _vm.getTarget(item)
      }
    }, [_c('v-list-tile-action', [_c('icon', {
      attrs: {
        "name": item.icon
      }
    })], 1), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', [_vm._v(_vm._s(item.title))])], 1)], 1)
  })], 2)], 1), _vm._v(" "), _c('v-toolbar', {
    attrs: {
      "fixed": ""
    }
  }, [_c('span', {
    staticClass: "hidden-md-and-up"
  }, [_c('v-toolbar-side-icon', {
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.drawer = !_vm.drawer
      }
    }
  })], 1), _vm._v(" "), _c('v-toolbar-title', [_c('router-link', {
    staticClass: "title",
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_vm._v("BLUECODERS - Go Cloud & AI with us")])], 1), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _vm._l((_vm.locals), function(local) {
    return _c('v-toolbar-items', {
      key: local.title,
      staticClass: "hidden-sm-and-down",
      attrs: {
        "href": local.link
      }
    }, [_c('v-btn', {
      attrs: {
        "href": local.link
      }
    }, [_vm._v(_vm._s(local.title))])], 1)
  }), _vm._v(" "), _vm._l((_vm.items), function(item) {
    return _c('v-toolbar-items', {
      key: item.title,
      staticClass: "hidden-sm-and-down",
      attrs: {
        "href": item.link
      }
    }, [_c('v-btn', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip:bottom",
        value: ({
          html: item.title
        }),
        expression: "{ html: item.title }",
        arg: "bottom"
      }],
      attrs: {
        "href": item.link,
        "target": "_blank"
      }
    }, [_c('icon', {
      attrs: {
        "name": item.icon,
        "scale": "2",
        "ripple": ""
      }
    })], 1)], 1)
  })], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-footer', {
    staticClass: "card elevation-7",
    attrs: {
      "fixed": ""
    }
  }, [_c('div', [_vm._v("\n  © 2017 BlueCodersMeet | Made with "), _c('v-spacer'), _vm._v(" "), _c('icon', {
    staticClass: "red--text",
    attrs: {
      "name": "heart",
      "scale": "1"
    }
  }), _vm._v(" "), _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: ({
        html: 'Vue.js'
      }),
      expression: "{ html: 'Vue.js' }",
      arg: "top"
    }],
    attrs: {
      "href": "https://vuejs.org/",
      "target": "_blank"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.icons.vuejs,
      "height": "14"
    }
  })]), _vm._v(" "), _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: ({
        html: 'Vuetify.js'
      }),
      expression: "{ html: 'Vuetify.js' }",
      arg: "top"
    }],
    attrs: {
      "href": "https://vuetifyjs.com/",
      "target": "_blank"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.icons.vuetify,
      "height": "15"
    }
  })]), _vm._v(" "), _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: ({
        html: 'Hosted on github.io'
      }),
      expression: "{ html: 'Hosted on github.io' }",
      arg: "top"
    }],
    attrs: {
      "href": "https://github.io",
      "target": "_blank"
    }
  }, [_c('icon', {
    attrs: {
      "name": "github-alt",
      "scale": "1"
    }
  })], 1), _vm._v(" "), _c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: ({
        html: 'Click to view source on GitHub'
      }),
      expression: "{ html: 'Click to view source on GitHub' }",
      arg: "top"
    }],
    attrs: {
      "href": "https://github.com/BlueCodersDev/BlueCodersDev.github.io",
      "target": "_blank"
    }
  }, [_c('icon', {
    attrs: {
      "name": "code",
      "scale": "1"
    }
  })], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-layout', {
    attrs: {
      "row": "",
      "wrap": "",
      "align-center": ""
    }
  }, [_c('v-flex', {
    attrs: {
      "xs12": "",
      "md4": ""
    }
  }, [_c('div', {
    staticClass: "text-xs-center"
  }, [_c('h4', {
    staticClass: "inline"
  }, [_vm._v("TEAM")])])]), _vm._v(" "), _c('v-flex', {
    attrs: {
      "xs12": "",
      "md5": "",
      "offset-md2": ""
    }
  }, _vm._l((_vm.posts), function(post) {
    return _c('div', {
      key: post.title
    }, [_c('v-card', {
      staticClass: "my-3",
      attrs: {
        "hover": ""
      }
    }, [_c('v-card-media', {
      staticClass: "white--text",
      attrs: {
        "height": "190px",
        "src": post.imgUrl
      }
    }, [_c('v-container', {
      attrs: {
        "fill-height": "",
        "fluid": ""
      }
    }, [_c('v-layout', {
      attrs: {
        "fill-height": ""
      }
    }, [_c('v-flex', {
      attrs: {
        "xs12": "",
        "align-end": "",
        "flexbox": ""
      }
    }, [_c('span', {
      staticClass: "headline inline-block"
    }, [_vm._v(_vm._s(post.title))])])], 1)], 1)], 1), _vm._v(" "), _c('v-card-text', [_vm._v("\n          " + _vm._s(post.content) + "\n        ")]), _vm._v(" "), _c('v-card-actions', [_c('v-btn', {
      staticClass: "red--text",
      attrs: {
        "icon": "",
        "href": 'http://reddit.com/submit?url=' + post.more + '&title=' + post.title
      }
    }, [_c('icon', {
      attrs: {
        "name": "reddit-alien"
      }
    })], 1), _vm._v(" "), _c('v-btn', {
      staticClass: "light-blue--text",
      attrs: {
        "icon": "",
        "href": 'https://twitter.com/share?url=' + post.more + '&via=VidyasagarMSC&text=' + post.title
      }
    }, [_c('icon', {
      attrs: {
        "name": "twitter"
      }
    })], 1), _vm._v(" "), _c('v-btn', {
      staticClass: "blue--text text--darken-3",
      attrs: {
        "icon": "",
        "href": 'http://www.facebook.com/sharer.php?' + 'u=' + post.more + '&t=' + post.title
      }
    }, [_c('icon', {
      attrs: {
        "name": "facebook-f"
      }
    })], 1), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-btn', {
      staticClass: "orange--text",
      attrs: {
        "flat": "",
        "href": post.more,
        "target": "_blank"
      }
    }, [_vm._v("Read More")])], 1)], 1)], 1)
  }))], 1)
},staticRenderFns: []}

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-container', {
    staticClass: "pa-0",
    attrs: {
      "fluid": ""
    }
  }, [_c('v-layout', {
    attrs: {
      "row": "",
      "wrap": ""
    }
  }, [_c('v-flex', {
    attrs: {
      "md12": "",
      "sm12": ""
    }
  }, [_c('div', {
    staticClass: "text-xs-center"
  }, _vm._l((_vm.skills), function(skill) {
    return _c('v-chip', {
      key: skill.name
    }, [_vm._v("\n          " + _vm._s(skill.name) + "\n        ")])
  }))])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-layout', {
    attrs: {
      "row": "",
      "wrap": "",
      "align-center": ""
    }
  }, [_c('v-flex', {
    attrs: {
      "xs12": "",
      "md4": ""
    }
  }, [_c('div', {
    staticClass: "text-xs-center"
  }, [_c('h4', {
    staticClass: "inline"
  }, [_vm._v(" Meetups")])])]), _vm._v(" "), _c('v-flex', {
    attrs: {
      "xs12": "",
      "md5": "",
      "offset-md2": ""
    }
  }, _vm._l((_vm.items), function(item) {
    return _c('div', {
      key: item.title
    }, [_c('v-card', {
      staticClass: "my-3",
      attrs: {
        "hover": ""
      }
    }, [_c('v-card-media', {
      staticClass: "white--text",
      attrs: {
        "height": "190px",
        "src": item.imgUrl
      }
    }, [_c('v-container', {
      attrs: {
        "fill-height": "",
        "fluid": ""
      }
    }, [_c('v-layout', {
      attrs: {
        "fill-height": ""
      }
    }, [_c('v-flex', {
      attrs: {
        "xs6": "",
        "align-start": "",
        "flexbox": ""
      }
    }, [_c('v-chip', {
      staticClass: "indigo white--text",
      attrs: {
        "label": ""
      }
    }, [_c('v-avatar', [_c('v-icon', [_vm._v(_vm._s(item.icon))])], 1), _vm._v("\n                 " + _vm._s(item.type) + "\n               ")], 1)], 1), _vm._v(" "), _c('v-flex', {
      attrs: {
        "xs6": "",
        "align-end": "",
        "flexbox": ""
      }
    }, [_c('span', {
      staticClass: "headline mb-0 inline-block"
    }, [_vm._v(_vm._s(item.event))])])], 1)], 1)], 1), _vm._v(" "), _c('v-card-text', [_vm._v("\n                 " + _vm._s(item.title) + "\n               ")]), _vm._v(" "), _c('v-card-actions', [_c('v-btn', {
      staticClass: "red--text",
      attrs: {
        "icon": "",
        "href": 'http://reddit.com/submit?url=https://bluecodersdev.github.io/meetups' + '&title=' + item.event + ' ' + item.title
      }
    }, [_c('icon', {
      attrs: {
        "name": "reddit-alien"
      }
    })], 1), _vm._v(" "), _c('v-btn', {
      staticClass: "light-blue--text",
      attrs: {
        "icon": "",
        "href": 'https://twitter.com/share?url=https://bluecodersdev.github.io/meetups' + '&via=VidyasagarMSC&text=' + item.event + ' ' + item.title
      }
    }, [_c('icon', {
      attrs: {
        "name": "twitter"
      }
    })], 1), _vm._v(" "), _c('v-btn', {
      staticClass: "blue--text text--darken-3",
      attrs: {
        "icon": "",
        "href": 'http://www.facebook.com/sharer.php?' + 'u=https://bluecodersdev.github.io/meetups' + '&t=' + item.event + ' ' + item.title
      }
    }, [_c('icon', {
      attrs: {
        "name": "facebook-f"
      }
    })], 1), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-btn', {
      staticClass: "orange--text",
      attrs: {
        "flat": "",
        "href": item.link,
        "target": "_blank"
      }
    }, [_vm._v("LINK")])], 1)], 1)], 1)
  }))], 1)
},staticRenderFns: []}

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-app', [_c('v-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('topbar'), _vm._v(" "), _c('main', [_c('v-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('router-view', [_c('home')], 1)], 1)], 1), _vm._v(" "), _c('bottombar')], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(35)
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "inline"
  }, [_vm._v("User Group | Developer Community")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.about))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.more))]), _vm._v(" "), _c('v-divider'), _c('br'), _vm._v(" "), _c('h3', {
    staticClass: "inline"
  }, [_vm._v("Our Mission")]), _vm._v(" "), _vm._m(0), _c('p', [_c('v-divider')], 1), _c('h3', {
    staticClass: "inline"
  }, [_vm._v("Topics")]), _vm._v(" "), _c('topics')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('ul', [_c('li', [_vm._v("DEVELOPERS with a passion to EXPLORE, CODE & SHARE.")]), _c('br'), _vm._v(" "), _c('li', [_vm._v("our MISSION is to enable DEVELOPERS on latest & hottest  technologies around CLOUD & AI.")]), _c('br'), _vm._v(" "), _c('li', [_vm._v("We SPEAK any PROGRAMMING LANGUAGE.")])])])
}]}

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Meetups__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Meetups___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Meetups__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Team__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Team___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Team__);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Home___default.a
  }, {
    path: '/meetups',
    name: 'Meetups',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Meetups___default.a
  }, {
    path: '/team',
    name: 'Team',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Team___default.a
  }]
}));

/***/ })

},[15]);
//# sourceMappingURL=app.5e5271cf22249ff522d5.js.map