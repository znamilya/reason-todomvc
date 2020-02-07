'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var App$ReasonReactExamples = require("./components/App/App.bs.js");

((require('todomvc-common/base.css')));

((require('todomvc-app-css/index.css')));

ReactDOMRe.renderToElementWithId(React.createElement(App$ReasonReactExamples.make, { }), "root");

/*  Not a pure module */
