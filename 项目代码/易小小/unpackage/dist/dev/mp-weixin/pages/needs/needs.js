"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      ScreenWidth: 0,
      ScreenHeight: 0,
      index: 0,
      style1: {},
      style2: {},
      style3: {},
      style4: {},
      style5: {},
      style_photo: {},
      input_style: {},
      ifclick: false,
      ifshow: {
        display: "none"
      },
      imgarr: [],
      value: "",
      price: "\u586B\u5199\u9884\u7B97"
    };
  },
  onReady() {
    let Width = 0;
    let Height = 0;
    common_vendor.index.getSystemInfo({
      success(res) {
        Width = res.screenWidth;
        Height = res.screenHeight - 240;
      }
    });
    this.ScreenWidth = Width;
    this.ScreenHeight = Height;
  },
  methods: {
    box_style() {
      let value_str = [...this.value];
      let isnan = false;
      this.ifshow = {
        zIndex: 0,
        opacity: 0,
        transition: "all ease-in 250ms"
      };
      value_str.forEach((item) => {
        if (isNaN(item)) {
          isnan = true;
        }
      });
      if (isnan == true) {
        common_vendor.index.showModal({
          title: "\u63D0\u793A",
          content: "\u9884\u7B97\u4E2D\u5305\u542B\u4E86\u975E\u6570\u5B57\u6210\u5206\uFF01",
          showCancel: false
        });
        this.price = "\u586B\u5199\u9884\u7B97";
      } else if (this.value == "") {
        this.price = "\u586B\u5199\u9884\u7B97";
      } else {
        this.price = this.value;
      }
    },
    preview(idx) {
      let imgarr = this.imgarr;
      common_vendor.index.previewImage({
        urls: imgarr[idx].path,
        longPressActions: {
          itemList: ["\u53D1\u9001\u7ED9\u670B\u53CB", "\u4FDD\u5B58\u56FE\u7247", "\u6536\u85CF"],
          success: function(data) {
            console.log("\u9009\u4E2D\u4E86\u7B2C" + (data.tapIndex + 1) + "\u4E2A\u6309\u94AE,\u7B2C" + (data.index + 1) + "\u5F20\u56FE\u7247");
          },
          fail: function(err) {
            console.log(err.errMsg);
          }
        }
      });
    },
    focu() {
      this.input_style = {
        border: "solid 1px red"
      };
    },
    blu(ev) {
      let value_str = [...this.value];
      let isnan = false;
      this.value = ev.target.value;
      console.log(this.value);
      this.input_style = {
        border: "solid 1px #dcdcdc"
      };
      value_str.forEach((item) => {
        if (isNaN(item)) {
          isnan = true;
        }
      });
      if (isnan == true) {
        common_vendor.index.showModal({
          title: "\u63D0\u793A",
          content: "\u9884\u7B97\u4E2D\u5305\u542B\u4E86\u975E\u6570\u5B57\u6210\u5206\uFF01",
          showCancel: false
        });
        this.price = "\u586B\u5199\u9884\u7B97";
      } else if (this.value == "") {
        this.price = "\u586B\u5199\u9884\u7B97";
      } else {
        this.price = this.value;
      }
    },
    select_photo() {
      let _this = this;
      common_vendor.index.chooseImage({
        count: 9,
        sizeType: ["original", "compressed"],
        sourceType: ["album"],
        success: function(res) {
          _this.index++;
          if (_this.index == 10) {
            common_vendor.index.showModal({
              title: "\u63D0\u793A",
              content: "\u6700\u591A\u4E0A\u4F209\u5F20\u56FE\u7247\uFF01",
              confirmText: "\u786E\u5B9A",
              showCancel: false
            });
          } else {
            _this.imgarr.push({
              "path": res.tempFilePaths
            });
          }
        }
      });
    },
    delimg(key) {
      let _this = this;
      common_vendor.index.showModal({
        title: "\u63D0\u793A",
        content: "\u786E\u5B9A\u8981\u5220\u9664\u56FE\u7247\u5417\uFF1F",
        cancelText: "\u53D6\u6D88",
        confirmText: "\u786E\u5B9A",
        success(res) {
          if (res.confirm) {
            _this.imgarr.splice(key, 1);
            _this.index--;
          }
        }
      });
    },
    fill_price() {
      this.ifshow = {
        zIndex: 88,
        transition: "all ease-in 250ms"
      };
    },
    changeColor(id) {
      this.ifclick = !this.ifclick;
      this.style1 = {};
      this.style2 = {};
      this.style3 = {};
      this.style4 = {};
      this.style5 = {};
      switch (id) {
        case 1:
          if (this.ifclick) {
            this.style1 = {
              backgroundColor: "#ffb3a7",
              color: "#ff2d51"
            };
          } else {
            this.style1 = {};
          }
          break;
        case 2:
          if (this.ifclick) {
            this.style2 = {
              backgroundColor: "#ffb3a7",
              color: "#ff2d51"
            };
          } else {
            this.style2 = {};
          }
          break;
        case 3:
          if (this.ifclick) {
            this.style3 = {
              backgroundColor: "#ffb3a7",
              color: "#ff2d51"
            };
          } else {
            this.style3 = {};
          }
          break;
        case 4:
          if (this.ifclick) {
            this.style4 = {
              backgroundColor: "#ffb3a7",
              color: "#ff2d51"
            };
          } else {
            this.style4 = {};
          }
          break;
        case 5:
          if (this.ifclick) {
            this.style5 = {
              backgroundColor: "#ffb3a7",
              color: "#ff2d51"
            };
          } else {
            this.style5 = {};
          }
          break;
      }
    }
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
    a: common_vendor.s($data.ifshow),
    b: common_vendor.o((...args) => $options.focu && $options.focu(...args)),
    c: common_vendor.o(($event) => $options.blu($event)),
    d: common_vendor.o((...args) => $options.box_style && $options.box_style(...args)),
    e: common_vendor.s($data.input_style),
    f: common_vendor.o((...args) => $options.box_style && $options.box_style(...args)),
    g: common_vendor.s({
      left: $data.ScreenWidth / 6 + "px"
    }),
    h: common_vendor.s($data.ifshow),
    i: common_vendor.o(($event) => $options.changeColor(1)),
    j: common_vendor.s($data.style1),
    k: common_vendor.o(($event) => $options.changeColor(2)),
    l: common_vendor.s($data.style2),
    m: common_vendor.o(($event) => $options.changeColor(3)),
    n: common_vendor.s($data.style3),
    o: common_vendor.o(($event) => $options.changeColor(4)),
    p: common_vendor.s($data.style4),
    q: common_vendor.o(($event) => $options.changeColor(5)),
    r: common_vendor.s($data.style5),
    s: $data.ScreenWidth + "px",
    t: $data.ScreenWidth - 10 + "px",
    v: common_vendor.p({
      type: "camera-filled",
      size: "55"
    }),
    w: common_vendor.o((...args) => $options.select_photo && $options.select_photo(...args)),
    x: common_vendor.s($data.style_photo),
    y: common_vendor.f($data.imgarr, (data, index, i0) => {
      return {
        a: data.path,
        b: common_vendor.o(($event) => $options.preview(index)),
        c: "14996342-1-" + i0,
        d: common_vendor.o(($event) => $options.delimg(index)),
        e: index
      };
    }),
    z: common_vendor.p({
      type: "closeempty",
      size: "17"
    }),
    A: $data.ScreenWidth - 95 + "px",
    B: common_vendor.t($data.price),
    C: common_vendor.o((...args) => $options.fill_price && $options.fill_price(...args)),
    D: common_vendor.p({
      type: "right",
      size: "17"
    }),
    E: $data.ScreenWidth + "px",
    F: $data.ScreenWidth + "px",
    G: $data.ScreenHeight + "px"
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-14996342"], ["__file", "C:/Users/LENOVO/Desktop/\u6613\u7269/\u6613\u7269/pages/needs/needs.vue"]]);
wx.createPage(MiniProgramPage);
