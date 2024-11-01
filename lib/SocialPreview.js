"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ui = require("@sanity/ui");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _FacebookLogo = _interopRequireDefault(require("./components/Facebook/FacebookLogo"));
var _GoogleLogo = _interopRequireDefault(require("./components/GoogleLogo"));
var _LinkedinLogo = _interopRequireDefault(require("./components/LinkedinLogo"));
var _TwitterLogo = _interopRequireDefault(require("./components/TwitterLogo"));
var _fallbackPrepareData = require("./fallbackPrepareData");
var _Facebook = require("./networks/Facebook");
var _Google = require("./networks/Google");
var _Linkedin = require("./networks/Linkedin");
var _Twitter = require("./networks/Twitter");
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Wrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: Open Sans, sans-serif;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n\n  .navBar {\n    background-color: white;\n    display: flex;\n    padding: 1.25em 0;\n    justify-content: center;\n    gap: 1em;\n    border-bottom: 1px solid #eaeaea;\n    // Make the network preview wrappers take up the remaining height of the panel\n    + * {\n      flex: 1;\n    }\n  }\n\n  button {\n    background-color: white;\n    border: none;\n    cursor: pointer;\n    transform: scale(0.8);\n    transition: all 0.2s;\n    filter: grayscale(1);\n\n    &:hover,\n    &:focus-visible,\n    &[data-active='true'] {\n      transform: scale(1.03);\n      filter: grayscale(0);\n      outline: none;\n    }\n  }\n"])));
var NETWORKS = {
  google: {
    icon: _GoogleLogo["default"],
    component: _Google.GoogleDesktop
  },
  facebook: {
    icon: _FacebookLogo["default"],
    component: _Facebook.FacebookSharePreview
  },
  twitter: {
    icon: _TwitterLogo["default"],
    component: _Twitter.TwitterSharePreview
  },
  linkedin: {
    icon: _LinkedinLogo["default"],
    component: _Linkedin.LinkedinSharePreview
  }
};
var SocialPreview = function SocialPreview() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$prepareData = _ref.prepareData,
    prepareData = _ref$prepareData === void 0 ? _fallbackPrepareData.fallbackPrepareData : _ref$prepareData,
    google = _ref.google,
    twitter = _ref.twitter,
    linkedin = _ref.linkedin,
    facebook = _ref.facebook;
  return function SocialPreviewComponent(_ref2) {
    var document = _ref2.document;
    var previewProps = prepareData(document === null || document === void 0 ? void 0 : document.displayed);
    var _useState = (0, _react.useState)('google'),
      _useState2 = _slicedToArray(_useState, 2),
      chosenNetwork = _useState2[0],
      setChosenNetwork = _useState2[1];
    var chooseNetwork = (0, _react.useCallback)(function (network) {
      return function () {
        return setChosenNetwork(network);
      };
    }, [setChosenNetwork]);
    if (!previewProps || !(document !== null && document !== void 0 && document.displayed) || Object.keys(document.displayed).length <= 2) {
      return <_ui.Flex justify="center" align="center" height="fill">
          <_ui.Spinner muted size={2} />
        </_ui.Flex>;
    }
    var networkProps = {
      google: google === false ? undefined : (google || prepareData)(document === null || document === void 0 ? void 0 : document.displayed),
      twitter: twitter === false ? undefined : (twitter || prepareData)(document === null || document === void 0 ? void 0 : document.displayed),
      linkedin: linkedin === false ? undefined : (linkedin || prepareData)(document === null || document === void 0 ? void 0 : document.displayed),
      facebook: facebook === false ? undefined : (facebook || prepareData)(document === null || document === void 0 ? void 0 : document.displayed)
    };
    var networkKeys = Object.keys(NETWORKS);
    return <Wrapper>
        <div className="navBar">
          {networkKeys.map(function (network) {
          if (!networkProps[network]) return null;
          var Icon = NETWORKS[network].icon;
          return <button key={network} type="button" onClick={chooseNetwork(network)} data-active={network === chosenNetwork}>
                <Icon />
              </button>;
        })}
        </div>
        {networkKeys.map(function (network) {
        var props = networkProps[network];
        if (!props || network !== chosenNetwork) return null;
        var Component = NETWORKS[network].component;
        return <Component key={network} {...props} />;
      })}
      </Wrapper>;
  };
};
var _default = exports["default"] = SocialPreview;