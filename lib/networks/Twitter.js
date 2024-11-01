"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwitterSharePreview = TwitterSharePreview;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ShareItem = require("../components/ShareItem");
var _ThreeDots = _interopRequireDefault(require("../components/ThreeDots"));
var _utils = require("../utils");
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Wrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 12px 16px;\n  max-width: 560px;\n  background: #ffffff;\n  font-family: 'Segoe UI', Arial, sans-serif;\n  font-size: 15px;\n  line-height: 20px;\n  display: grid;\n  grid-template-columns: 48px auto;\n  column-gap: 12px;\n\n  .profileImg {\n    grid-row: 1 / -1;\n    grid-column: 1;\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n  }\n\n  .profile {\n    display: flex;\n    flex-direction: row;\n    align-items: start;\n    justify-content: space-between;\n    height: 20px;\n    margin-bottom: 2px;\n    width: 100%;\n    color: rgb(83, 100, 113);\n  }\n\n  .userInfo {\n    display: flex;\n    flex-direction: row;\n    column-gap: 4px;\n  }\n\n  .userInfo > div {\n    color: rgb(15, 20, 25);\n    font-weight: 700;\n  }\n\n  .button {\n    color: #981ceb;\n    border: 1px solid currentColor;\n    border-radius: 100px;\n    font-size: 14px;\n    min-width: 100px;\n    line-height: 20px;\n    font-weight: 700;\n    padding: 6px 16px;\n    text-align: center;\n    background: transparent;\n    cursor: pointer;\n  }\n\n  .card {\n    border-width: 1px;\n    border-style: solid;\n    border-color: #cfd9de;\n    border-radius: 16px;\n    overflow: hidden;\n    margin: 10px 0 20px;\n  }\n\n  .card > img {\n    width: 100%;\n    display: block;\n    object-fit: cover;\n    height: 263.867px;\n  }\n\n  .content {\n    padding: 12px;\n    color: rgb(83, 100, 113);\n  }\n\n  .content > span {\n    text-transform: lowercase;\n    max-height: 18px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-bottom: 2px;\n  }\n\n  .content > div {\n    max-height: 18px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: #0f1419;\n    margin-bottom: 2px;\n  }\n\n  .content > p {\n    max-height: 36px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: 2;\n    -moz-box-orient: vertical;\n    margin: 0;\n  }\n\n  .interactive {\n    display: flex;\n    max-width: 425px;\n    height: 21.352px;\n    margin-top: 12px;\n    column-gap: 8px;\n    justify-content: space-between;\n  }\n\n  .interactive > div {\n    display: flex;\n  }\n\n  .interactive > div > svg {\n    fill: rgb(83, 100, 113);\n    width: 1.25em;\n    height: 1.25em;\n  }\n\n  .interactive > div > p {\n    padding: 0px 12px;\n    color: rgb(83, 100, 113);\n    font-size: 13px;\n    line-height: 16px;\n    align-self: center;\n    margin: 0;\n  }\n\n  h4 {\n    color: rgb(101, 119, 134);\n    font-size: 12px;\n    line-height: 12px;\n    margin: 0;\n    padding-left: 12px;\n    align-self: center;\n  }\n"])));
function TwitterSharePreview(_ref) {
  var title = _ref.title,
    description = _ref.description,
    image = _ref.image,
    url = _ref.url;
  var ogImageUrl = (0, _utils.useImageUrl)(image, {
    w: 1200,
    h: 600
  });
  return <_ShareItem.ShareItem style={{
    background: 'rgb(230, 236, 240)'
  }} title="Twitter sharing">
      <Wrapper>
        <img className={'profileImg'} src="https://via.placeholder.com/48x48" aria-hidden />
        <div className={'fullCard'}>
          <div className={'profile'}>
            <div className={'userInfo'}>
              <div>Person</div>
              <span>@person</span>
              <span>·</span>
              <span>
                {new Date().toLocaleDateString('en', {
                dateStyle: 'medium'
              })}
              </span>
            </div>
            <_ThreeDots.default />
          </div>
          <div className={'card'}>
            {ogImageUrl && <img src={ogImageUrl} alt={"Image for ".concat(title)} />}
            <div className={'content'}>
              <span>{(0, _utils.getDomainName)(url)}</span>
              <div>{title}</div>
              {description && <p>{(0, _utils.truncate)(description, 150)}</p>}
            </div>
          </div>
          <div className={'interactive'}>
            <div>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" />
                </g>
              </svg>
              <p>6,244</p>
            </div>
            <div>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
                </g>
              </svg>
              <p>2</p>
            </div>
            <div>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
                </g>
              </svg>
              <p>4</p>
            </div>
            <div>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                </g>
              </svg>
              <p>14</p>
            </div>
            <div>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Wrapper>
    </_ShareItem.ShareItem>;
}