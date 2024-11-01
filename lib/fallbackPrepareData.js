"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fallbackPrepareData = void 0;
var _utils = require("./utils");
var fallbackPrepareData = exports.fallbackPrepareData = function fallbackPrepareData(doc) {
  if (!doc) {
    return;
  }
  var description = doc.description || doc.metaDescription || doc.seoDescription;

  // Sane defaults to what we could use for title, description, etc.
  // eslint-disable-next-line
  return {
    title: doc.title || '(page not yet named)',
    description:
    // eslint-disable-next-line
    typeof description === 'string' ? description : Array.isArray(description) ? (0, _utils.toPlainText)(description) : undefined,
    url: 'https://example.com',
    image: doc.openGraphImage || doc.ogImage || doc.image
  };
};