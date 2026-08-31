// Modulo vazio de proposito.
//
// Substitui next/dist/build/polyfills/polyfill-module no bundle do cliente,
// via NormalModuleReplacementPlugin em next.config.mjs. Aquele polyfill e
// importado direto pelo runtime do Next 14 (next/dist/client/app-index.js),
// fora do alcance do browserslist, e traz ~11,5 KB de Array.prototype.at,
// Object.hasOwn, String.prototype.trimStart e afins - todos nativos nos
// navegadores declarados no browserslist do package.json.
module.exports = {};
