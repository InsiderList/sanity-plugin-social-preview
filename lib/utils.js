"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomainName = exports.assemblePageUrl = void 0;
exports.toPlainText = toPlainText;
exports.truncate = truncate;
exports.useImageUrl = void 0;
var _imageUrl = _interopRequireDefault(require("@sanity/image-url"));
var _sanity = require("sanity");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var getDomainName = exports.getDomainName = function getDomainName(str) {
  try {
    var url = new URL(str);
    return url.hostname;
  } catch (error) {
    return str;
  }
};

// eslint-disable-next-line
var useImageUrl = exports.useImageUrl = function useImageUrl(image, dimensions) {
  var projectId = (0, _sanity.useProjectId)();
  var dataset = (0, _sanity.useDataset)();
  if (!image) return undefined;
  if (typeof image === 'string') {
    return image;
  }
  var builder = (0, _imageUrl["default"])({
    projectId: projectId,
    dataset: dataset
  });
  return builder.image(image).width(dimensions.w).height(dimensions.h).url();
};
var assemblePageUrl = exports.assemblePageUrl = function assemblePageUrl(_ref) {
  var document = _ref.document,
    options = _ref.options;
  var slug = document.slug;
  var previewURL = options.previewURL;
  if (!slug || !previewURL) {
    console.warn('Missing slug or previewURL', {
      slug: slug,
      previewURL: previewURL
    });
    return '';
  }
  return "".concat(previewURL, "/project/").concat(slug);
};
var defaults = {
  nonTextBehavior: 'remove'
};
function toPlainText(blocks) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = Object.assign({}, defaults, opts);
  return blocks.map(function (block) {
    if (block._type !== 'block' || !block.children) {
      return options.nonTextBehavior === 'remove' ? '' : "[".concat(block._type, " block]");
    }
    return block.children.map(function (child) {
      return child.text || '';
    }).join('');
  }).join('\n\n');
}
function truncate(str, maxLength) {
  if (str.length < maxLength) {
    return str;
  }

  // To prevent truncating in the middle of words, let's get
  // the position of the first whitespace after the truncation
  var firstWhitespaceAfterTruncation = str.slice(maxLength).search(/\s/) + maxLength;
  return "".concat(str.slice(0, firstWhitespaceAfterTruncation), "...");
}