"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleDesktop = GoogleDesktop;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ThreeDots = _interopRequireDefault(require("../components/ThreeDots"));
var _ShareItem = require("../components/ShareItem");
var _utils = require("../utils");
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var DesktopWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  line-height: 1.3;\n  font-family: arial, sans-serif;\n  max-width: 773px;\n\n  .header {\n    display: flex;\n    align-items: center;\n    padding: 1px 0 2px 0;\n    font-size: 14px;\n    color: #202124;\n    height: 20.539px; }\n\n    .header > span {\n      padding-right: 12px;\n    }\n\n    .dots {\n      transform: rotate(90deg);\n      padding-top: 5px;\n    }\n\n    .dots > svg {\n      width: 16px;\n      height: 16px;\n    }\n  }\n\n  > h3 {\n    color: #1a0dab;\n    font-size: 20px;\n    line-height: 1.3;\n    font-weight: normal;\n    margin: 5px 0 3px;\n  }\n\n  > p {\n    color: #4d5156;\n    font-size: 14px;\n    line-height: 1.58;\n    word-wrap: break-word;\n    margin: 0;\n  }\n"])));
function GoogleDesktop(_ref) {
  var title = _ref.title,
    description = _ref.description,
    url = _ref.url;
  return <_ShareItem.ShareItem title="Google result">
      <DesktopWrapper>
        <div className={'header'}>
          <span>{(0, _utils.getDomainName)(url)}</span>
          <div className={'dots'}>
            <_ThreeDots.default />
          </div>
        </div>
        <h3>{title}</h3>
        {/* @TODO: add optional date before description */}
        {description && <p>{(0, _utils.truncate)(description, 135)}</p>}
      </DesktopWrapper>
    </_ShareItem.ShareItem>;
}