"use strict";
var common_vendor = require("../../common/vendor.js");
const Search = () => "./components/search.js";
const Content = () => "./components/content.js";
const _sfc_main = {
  components: {
    Search,
    Content
  }
};
if (!Array) {
  const _component_Search = common_vendor.resolveComponent("Search");
  const _component_Content = common_vendor.resolveComponent("Content");
  (_component_Search + _component_Content)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/LENOVO/Desktop/\u6613\u7269/\u6613\u7269/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
