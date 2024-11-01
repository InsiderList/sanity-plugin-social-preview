"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShareItem = ShareItem;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _ui = require("@sanity/ui");
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Section = _styledComponents["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 35px 45px;\n  overflow: hidden;\n\n  > * {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  > h2 {\n    text-align: center;\n    padding-bottom: 1.5em;\n    text-transform: capitalize;\n  }\n"])));
function ShareItem(props) {
  return <Section style={props.style}>
      <_ui.Heading as="h2" size={2} justify-self="center">
        {props.title}
      </_ui.Heading>
      {props.children}
    </Section>;
}