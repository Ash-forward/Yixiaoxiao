"use strict";
var common_vendor = require("../../../common/vendor.js");
const G1New = () => "./home_content/G1_new.js";
const G1Makeup = () => "./home_content/G1_makeup.js";
const G1Book = () => "./home_content/G1_book.js";
const G1Other = () => "./home_content/G1_other.js";
const _sfc_main = {
  components: {
    G1New,
    G1Makeup,
    G1Book,
    G1Other
  },
  data() {
    return {
      curIndex: 1,
      current_page: 0,
      code: 0,
      height1: false,
      rotate1: false,
      height2: false,
      rotate2: false,
      inputstyle: {},
      stylecart1: {},
      stylecart2: {},
      stylecart3: {},
      ifselect1: false,
      ifselect2: false,
      ifselect3: false,
      stylecarttrans: {
        backgroundColor: "#EE3F4D"
      },
      text_position: {},
      minprice: "",
      maxprice: ""
    };
  },
  onReady() {
    this.$refs.ani.init({
      duration: 250,
      timingFunction: "ease",
      transformOrigin: "center"
    });
  },
  methods: {
    Getvaluel(ev) {
      this.minprice = ev.detail.value;
    },
    Getvaluer(ev) {
      this.maxprice = ev.detail.value;
    },
    cart(code) {
      if (code == 1 || code == 2) {
        common_vendor.index.$emit("rankcode", { value: code });
      } else if (code == 4) {
        common_vendor.index.$emit("rankcode", { value: code, min: this.minprice, max: this.maxprice });
      }
    },
    nav_class() {
      common_vendor.index.navigateTo({
        url: "/pages/class/class"
      });
    },
    rank() {
      let page = this.current_page;
      if (page != 3) {
        if (this.height2) {
          this.height2 = false;
        }
        this.rotate1 = !this.rotate1;
        this.height1 = !this.height1;
      }
    },
    price() {
      let page = this.current_page;
      if (page != 3) {
        if (this.height1) {
          this.height1 = false;
        }
        this.rotate2 = !this.rotate2;
        this.height2 = !this.height2;
      }
    },
    chengenum(num) {
      this.stylecart1 = {};
      this.stylecart2 = {};
      this.stylecart3 = {};
      if (num == 1) {
        this.ifselect1 = !this.ifselect1;
        this.text_position = {
          left: "9px"
        };
        this.minprice = "0";
        this.maxprice = "100";
        if (this.ifselect1) {
          this.stylecart1 = this.stylecarttrans;
        } else {
          this.minprice = "";
          this.maxprice = "";
          this.stylecart1 = {};
          this.text_position = {};
        }
      } else if (num == 2) {
        this.ifselect2 = !this.ifselect2;
        this.stylecart2 = this.stylecarttrans;
        this.text_position = {
          left: "9px"
        };
        this.minprice = "0";
        this.maxprice = "200";
        if (this.ifselect2) {
          this.stylecart2 = this.stylecarttrans;
        } else {
          this.minprice = "";
          this.maxprice = "";
          this.stylecart2 = {};
          this.text_position = {};
        }
      } else {
        this.ifselect3 = !this.ifselect3;
        this.stylecart3 = this.stylecarttrans;
        this.text_position = {
          left: "9px"
        };
        this.minprice = "0";
        this.maxprice = "400";
        if (this.ifselect3) {
          this.stylecart3 = this.stylecarttrans;
        } else {
          this.minprice = "";
          this.maxprice = "";
          this.stylecart13 = {};
          this.text_position = {};
        }
      }
    },
    boderstyle() {
      this.inputstyle = {
        border: "solid 1px black"
      };
    },
    changecolor(index, event) {
      this.curIndex = index;
      let change_des = event.currentTarget.offsetLeft - 10;
      let tran_1 = change_des.toString();
      this.$refs.ani.step({
        translateX: tran_1 + "px"
      });
      this.$refs.ani.run();
      this.current_page = index - 1;
    },
    swiper_change(ev) {
      let index = ev.detail.current;
      let tras_des = 0;
      switch (index) {
        case 0:
          tras_des = 0;
          break;
        case 1:
          tras_des = 45;
          break;
        case 2:
          tras_des = 88;
          break;
        case 3:
          tras_des = 130;
          break;
      }
      let tran_2 = tras_des.toString();
      this.$refs.ani.step({
        translateX: tran_2 + "px"
      });
      this.$refs.ani.run();
      this.curIndex = index + 1;
      this.current_page = index;
    }
  }
};
if (!Array) {
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_transition2 = common_vendor.resolveComponent("uni-transition");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_G1New = common_vendor.resolveComponent("G1New");
  const _component_G1Makeup = common_vendor.resolveComponent("G1Makeup");
  const _component_G1Book = common_vendor.resolveComponent("G1Book");
  const _component_G1Other = common_vendor.resolveComponent("G1Other");
  (_easycom_uni_notice_bar2 + _easycom_uni_transition2 + _easycom_uni_icons2 + _component_G1New + _component_G1Makeup + _component_G1Book + _component_G1Other)();
}
const _easycom_uni_notice_bar = () => "../../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_transition = () => "../../../uni_modules/uni-transition/components/uni-transition/uni-transition.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_notice_bar + _easycom_uni_transition + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["show-icon"]: true,
      scrollable: true,
      color: "#AF8A54",
      ["background-color"]: "white",
      showClose: "true",
      text: "\u7BA1\u7406\u5458: \u7981\u6B62\u4EA4\u6613\u5BA0\u7269,\u4F20\u64AD\u4E0D\u826F\u7269\u54C1,\u56FE\u7247,\u53CA\u4E0D\u5F53\u8BC4\u8BBA,\u72AF\u8005\u5FC5\u7A76!"
    }),
    b: common_vendor.o(($event) => $options.changecolor(1, $event)),
    c: common_vendor.n($data.curIndex == 1 ? "active" : ""),
    d: common_vendor.o(($event) => $options.changecolor(2, $event)),
    e: common_vendor.n($data.curIndex == 2 ? "active" : ""),
    f: common_vendor.o(($event) => $options.changecolor(3, $event)),
    g: common_vendor.n($data.curIndex == 3 ? "active" : ""),
    h: common_vendor.o(($event) => $options.changecolor(4, $event)),
    i: common_vendor.n($data.curIndex == 4 ? "active" : ""),
    j: common_vendor.sr("ani", "eee4a992-1"),
    k: common_vendor.p({
      ["mode-class"]: "fade",
      show: true
    }),
    l: common_vendor.p({
      type: "arrowdown",
      color: "#666",
      size: "17"
    }),
    m: common_vendor.n($data.rotate1 ? "go" : "tem"),
    n: common_vendor.o((...args) => $options.rank && $options.rank(...args)),
    o: common_vendor.p({
      type: "arrowdown",
      color: "#666",
      size: "17"
    }),
    p: common_vendor.n($data.rotate2 ? "go" : "tem"),
    q: common_vendor.o((...args) => $options.price && $options.price(...args)),
    r: common_vendor.p({
      type: "calendar-filled",
      color: "#666",
      size: "17"
    }),
    s: common_vendor.o((...args) => $options.nav_class && $options.nav_class(...args)),
    t: common_vendor.p({
      type: "settings-filled",
      size: "18"
    }),
    v: common_vendor.o(($event) => $options.cart(1)),
    w: common_vendor.o(($event) => $options.cart(2)),
    x: common_vendor.n($data.height1 ? "pullDown" : "pullDown_hidden"),
    y: $data.minprice,
    z: common_vendor.o(($event) => $options.Getvaluel($event)),
    A: common_vendor.s($data.text_position),
    B: common_vendor.s($data.inputstyle),
    C: $data.maxprice,
    D: common_vendor.o(($event) => $options.Getvaluer($event)),
    E: common_vendor.s($data.text_position),
    F: common_vendor.s($data.inputstyle),
    G: common_vendor.s($data.stylecart1),
    H: common_vendor.o(($event) => {
      $options.chengenum(1);
      $options.boderstyle();
    }),
    I: common_vendor.s($data.stylecart2),
    J: common_vendor.o(($event) => {
      $options.chengenum(2);
      $options.boderstyle();
    }),
    K: common_vendor.s($data.stylecart3),
    L: common_vendor.o(($event) => {
      $options.chengenum(3);
      $options.boderstyle();
    }),
    M: common_vendor.o(($event) => {
      $data.minprice = "";
      $data.maxprice = "";
      $data.stylecart1 = {};
      $data.stylecart2 = {};
      $data.stylecart3 = {};
      $data.text_position = {};
    }),
    N: common_vendor.o(($event) => $options.cart(4)),
    O: common_vendor.n($data.height2 ? "pull_price" : "pullDown_hidden"),
    P: $data.current_page,
    Q: common_vendor.o(($event) => $options.swiper_change($event))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/LENOVO/Desktop/\u6613\u7269/\u6613\u7269/pages/home/components/content.vue"]]);
wx.createComponent(Component);
