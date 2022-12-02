"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      searchData: "\u4E66\u672C",
      searchList: [
        {
          temp: "\u5507\u91C9"
        },
        {
          temp: "\u5439\u98CE"
        },
        {
          temp: "\u7F8E\u5986\u86CB"
        },
        {
          temp: "\u68B3\u5B50"
        }
      ]
    };
  },
  onReady() {
    this.changecontent();
  },
  methods: {
    changecontent() {
      setInterval(() => {
        let num = Math.floor(Math.random() * 4);
        this.searchData = this.searchList[num].temp;
      }, 4e3);
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_transition2 = common_vendor.resolveComponent("uni-transition");
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  (_easycom_uni_icons2 + _easycom_uni_transition2 + _easycom_uni_nav_bar2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_transition = () => "../../../uni_modules/uni-transition/components/uni-transition/uni-transition.js";
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_transition + _easycom_uni_nav_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "arrowdown",
      color: "#666",
      size: "17"
    }),
    b: common_vendor.o((...args) => _ctx.postion && _ctx.postion(...args)),
    c: common_vendor.p({
      type: "search",
      size: "18",
      color: "black"
    }),
    d: common_vendor.t($data.searchData),
    e: common_vendor.sr("ani", "6874066c-3,6874066c-0"),
    f: common_vendor.p({
      show: true,
      timingFunction: "ease-in-out"
    }),
    g: common_vendor.p({
      ["custom-prefix"]: "custom-icon",
      type: "list",
      size: "23"
    }),
    h: common_vendor.p({
      height: "40px"
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6874066c"], ["__file", "C:/Users/LENOVO/Desktop/\u6613\u7269/\u6613\u7269/pages/home/components/search.vue"]]);
wx.createComponent(Component);
