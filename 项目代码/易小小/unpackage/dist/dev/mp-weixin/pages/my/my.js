"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      Swidth: 0,
      code: "",
      Userdata: {
        nikename: "\u529B\u4E89",
        headshot: "../../static/headshot.png"
      }
    };
  },
  onReady() {
    let swidth = 0;
    common_vendor.index.getSystemInfo({
      success(res) {
        swidth = res.screenWidth;
      }
    });
    this.Swidth = swidth;
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.Userdata.nikename),
    b: common_vendor.p({
      type: "shop-filled",
      size: "50"
    }),
    c: common_vendor.p({
      type: "camera-filled",
      size: "50"
    }),
    d: common_vendor.p({
      type: "shop",
      size: "25",
      color: "rgb(244, 207, 22)"
    }),
    e: common_vendor.p({
      type: "right",
      size: "25"
    }),
    f: $data.Swidth + "px",
    g: common_vendor.p({
      type: "wallet-filled",
      size: "25",
      color: "rgb(244, 207, 22)"
    }),
    h: common_vendor.p({
      type: "right",
      size: "25"
    }),
    i: $data.Swidth + "px",
    j: common_vendor.p({
      type: "checkbox-filled",
      size: "25",
      color: "rgb(244, 207, 22)"
    }),
    k: common_vendor.p({
      type: "right",
      size: "25"
    }),
    l: $data.Swidth + "px",
    m: common_vendor.p({
      type: "paperplane-filled",
      size: "25",
      color: "rgb(244, 207, 22)"
    }),
    n: common_vendor.p({
      type: "right",
      size: "25"
    }),
    o: $data.Swidth + "px",
    p: common_vendor.p({
      type: "right",
      size: "25"
    }),
    q: $data.Swidth + "px",
    r: common_vendor.p({
      type: "right",
      size: "25"
    }),
    s: $data.Swidth + "px"
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0be17cc6"], ["__file", "C:/Users/LENOVO/Desktop/\u6613\u7269/\u6613\u7269/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
