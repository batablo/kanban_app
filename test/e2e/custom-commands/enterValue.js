// input要素等へのキーボード入力をエミュレート
exports.command = function (selector, value) {
  return this.clearValue(selector).setValue(selector, value).trigger(selector, 'keyup', 13);
};
