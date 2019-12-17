'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var App$ReasonReactExamples = require("./components/App/App.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(App$ReasonReactExamples.make, { }), "root");

/*  Not a pure module */
