"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookSharePreview = FacebookSharePreview;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ShareItem = require("../components/ShareItem");
var _utils = require("../utils");
var _InfoCircle = _interopRequireDefault(require("../components/Facebook/InfoCircle"));
var _GlobeIcon = _interopRequireDefault(require("../components/GlobeIcon"));
var _ThreeDots = _interopRequireDefault(require("../components/ThreeDots"));
var _CommentSVG = _interopRequireDefault(require("../components/Facebook/CommentSVG"));
var _LikeSVG = _interopRequireDefault(require("../components/Facebook/LikeSVG"));
var _ShareSVG = _interopRequireDefault(require("../components/Facebook/ShareSVG"));
var _templateObject; // SVG COMPONENTS:
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Wrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: hidden;\n  font-family: Helvetica, Arial, sans-serif;\n  background: #fff;\n  color: #1c1e21;\n  line-height: 1.34;\n  max-width: min(680px, 100%);\n  border-radius: max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px;\n\n  &:hover .content {\n    background: rgba(29, 33, 41, 0.08);\n  }\n\n  .header {\n    padding: 12px 16px 0 16px;\n    height: 36px;\n    margin-bottom: 12px;\n    display: flex;\n    flex-direction: row;\n  }\n\n  .headerContent {\n    margin-top: -5px;\n    margin-bottom: -5px;\n    margin-left: 10px;\n    width: 100%;\n  }\n\n  .headerContent > div {\n    color: #050505;\n    font-weight: 600;\n    font-size: 15px;\n    line-height: 17.5px;\n    text-align: left;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n\n  .headerContent > span {\n    font-weight: 400;\n    font-size: 13px;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    color: #65676b;\n    height: 16px;\n  }\n\n  .headerContent > span > span {\n    padding-left: 3.665px;\n    padding-right: 3.665px;\n    font-size: 0.8125rem;\n    width: 3.665px;\n  }\n\n  .headerContent > span > svg {\n    fill: currentColor;\n    width: 12px;\n    flex: 0 0 12px;\n  }\n\n  .threeDots {\n    padding: 8px;\n    width: 20px;\n    height: 20px;\n  }\n\n  .header > img {\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n  }\n\n  .container {\n    display: grid;\n    width: 100%;\n    background: rgba(29, 33, 41, 0.04);\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  }\n\n  .imgContainer {\n    position: relative;\n  }\n\n  .imgContainer[data-has-img='true'] {\n    aspect-ratio: 1.91;\n  }\n\n  .imgContainer > svg {\n    position: absolute;\n    right: 18px;\n    bottom: 0;\n    transform: translateY(50%);\n    z-index: 1;\n  }\n\n  .image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n  }\n\n  .content {\n    padding: 12px 16px;\n    color: #050505;\n    background: #f0f2f5;\n    height: 52px;\n    line-height: 16.08px;\n    overflow: hidden;\n  }\n\n  .url {\n    color: #65676b;\n    flex-shrink: 0;\n    font-size: 13px;\n    line-height: 16px;\n    overflow: hidden;\n    padding: 0;\n    text-overflow: ellipsis;\n    text-transform: uppercase;\n    white-space: nowrap;\n  }\n\n  .title {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n    overflow: hidden;\n  }\n\n  .title a {\n    color: #050505;\n    font-family: inherit;\n    font-size: 17px;\n    font-weight: 600;\n    line-height: 20px;\n    text-decoration: none;\n  }\n\n  .desc {\n    color: #606770;\n    font-size: 15px;\n    line-height: 20px;\n    max-height: 80px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n    overflow: hidden;\n  }\n\n  .actions {\n    padding: 4px;\n    height: 44px;\n    align-items: center;\n    display: flex;\n    justify-content: space-evenly;\n    font-size: 15px;\n    font-weight: 600;\n    color: #65676b;\n    line-height: 19.9995px;\n  }\n\n  .actions > span {\n    margin: -6px -4px;\n    padding-left: 12px;\n    padding-right: 12px;\n    display: flex;\n    align-items: center;\n  }\n\n  .actions > span > svg {\n    padding-right: 8px;\n    height: 18px;\n    width: 18px;\n  }\n"])));
function FacebookSharePreview(_ref) {
  var title = _ref.title,
    description = _ref.description,
    image = _ref.image,
    url = _ref.url;
  var ogImageUrl = (0, _utils.useImageUrl)(image, {
    w: 1200,
    h: 630
  });
  return <_ShareItem.ShareItem style={{
    background: 'rgb(233, 235, 238)'
  }} title="Facebook sharing">
      <Wrapper>
        <div className={'header'}>
          <img src="https://via.placeholder.com/40x40" aria-hidden />
          <div className={'headerContent'}>
            <div>Person</div>
            <span>
              1h <span> · </span>
              <_GlobeIcon.default />
            </span>
          </div>
          <div className={'threeDots'}>
            <_ThreeDots.default />
          </div>
        </div>
        <div className={'container'}>
          <div className={'imgContainer'} data-has-img={!!ogImageUrl}>
            {ogImageUrl && <img className={'image'} src={ogImageUrl} alt={"Image for ".concat(title)} />}
            <_InfoCircle.default />
          </div>
          <div className={'content'}>
            <div className={'url'}>{(0, _utils.getDomainName)(url)}</div>
            <div className={'title'}>
              <a href="#">{title}</a>
            </div>
            {description && <div className={'desc'}>{(0, _utils.truncate)(description, 200)}</div>}
          </div>
        </div>
        <div className={'actions'}>
          <span>
            <_LikeSVG.default />
            Like
          </span>
          <span>
            <_CommentSVG.default />
            Comment
          </span>
          <span>
            <_ShareSVG.default />
            Share
          </span>
        </div>
      </Wrapper>
    </_ShareItem.ShareItem>;
}