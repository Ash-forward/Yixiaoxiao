"use strict";
var common_vendor = require("../../common/vendor.js");
const G1New = () => "../home/components/home_content/G1_new.js";
const G1Makeup = () => "../home/components/home_content/G1_makeup.js";
const G1Book = () => "../home/components/home_content/G1_book.js";
const G1Bag = () => "./navigator_top/bag.js";
const G1Clothe = () => "./navigator_top/chloth.js";
const G1Hair = () => "./navigator_top/hair.js";
const G1Shcoolbag = () => "./navigator_top/shcoolbag.js";
const G1Notebook = () => "./navigator_top/notebook.js";
const G1Food = () => "./navigator_top/food.js";
const G1Other = () => "../home/components/home_content/G1_other.js";
const _sfc_main = {
  components: {
    G1New,
    G1Makeup,
    G1Book,
    G1Bag,
    G1Clothe,
    G1Hair,
    G1Shcoolbag,
    G1Notebook,
    G1Food,
    G1Other
  },
  onReady() {
    let ScreenWid = 0;
    let ScreenHei = 0;
    common_vendor.index.getSystemInfo({
      success(res) {
        ScreenWid = res.screenWidth;
        ScreenHei = res.windowHeight;
      }
    });
    this.Width = ScreenWid;
    this.Height = ScreenHei;
  },
  data() {
    return {
      Width: 0,
      Height: 0,
      heright_totop: 0,
      category: [
        {
          id: 1,
          name: "\u6700\u65B0"
        },
        {
          id: 2,
          name: "\u7F8E\u5986"
        },
        {
          id: 3,
          name: "\u4E66\u672C"
        },
        {
          id: 4,
          name: "\u5305\u5305"
        },
        {
          id: 5,
          name: "\u8863\u670D"
        },
        {
          id: 6,
          name: "\u9970\u54C1"
        },
        {
          id: 7,
          name: "\u4E66\u5305"
        },
        {
          id: 8,
          name: "\u6587\u5177"
        },
        {
          id: 9,
          name: "\u96F6\u98DF"
        },
        {
          id: 10,
          name: "\u5176\u5B83"
        }
      ],
      contentScrollW: 0,
      curIndex: 0,
      scrollLeft: 0
    };
  },
  mounted() {
    this.getScrollW();
  },
  methods: {
    getScrollW() {
      const query = common_vendor.index.createSelectorQuery().in(this);
      query.select(".content-scroll").boundingClientRect((data) => {
        console.log(data.top);
        this.contentScrollW = data.width;
      }).exec();
      query.selectAll(".scroll-item").boundingClientRect((data) => {
        let dataLen = data.length;
        for (let i = 0; i < dataLen; i++) {
          this.category[i].left = data[i].left;
          this.category[i].width = data[i].width;
        }
      }).exec();
    },
    changeTitle(index, event) {
      common_vendor.index.getSystemInfo({
        success: function(res) {
        }
      });
      this.scrollLeft = Math.round(this.category[index].left - this.contentScrollW / 2 + this.category[index].width / 2);
      this.curIndex = index;
    },
    swiper_change(ev) {
      let swiper_select = ev.detail.current;
      this.changeTitle(swiper_select);
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _component_G1New = common_vendor.resolveComponent("G1New");
  const _component_G1Makeup = common_vendor.resolveComponent("G1Makeup");
  const _component_G1Book = common_vendor.resolveComponent("G1Book");
  const _component_G1Bag = common_vendor.resolveComponent("G1Bag");
  const _component_G1Clothe = common_vendor.resolveComponent("G1Clothe");
  const _component_G1Hair = common_vendor.resolveComponent("G1Hair");
  const _component_G1Shcoolbag = common_vendor.resolveComponent("G1Shcoolbag");
  const _component_G1Notebook = common_vendor.resolveComponent("G1Notebook");
  const _component_G1Food = common_vendor.resolveComponent("G1Food");
  const _component_G1Other = common_vendor.resolveComponent("G1Other");
  (_easycom_uni_icons2 + _easycom_uni_nav_bar2 + _component_G1New + _component_G1Makeup + _component_G1Book + _component_G1Bag + _component_G1Clothe + _component_G1Hair + _component_G1Shcoolbag + _component_G1Notebook + _component_G1Food + _component_G1Other)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_nav_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "arrowdown",
      color: "#666",
      size: "17"
    }),
    b: common_vendor.p({
      type: "search",
      size: "18",
      color: "#999"
    }),
    c: common_vendor.p({
      height: "40px"
    }),
    d: common_vendor.f($data.category, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n($data.curIndex == index ? "active" : ""),
        c: index,
        d: common_vendor.o(($event) => $options.changeTitle(index, $event), index)
      };
    }),
    e: $data.scrollLeft,
    f: $data.curIndex,
    g: common_vendor.o(($event) => $options.swiper_change($event)),
    h: $data.Width + "px",
    i: $data.Height - 83 + "px"
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-465fb490"], ["__file", "C:/Users/LENOVO/Desktop/\u6613\u7269/\u6613\u7269/pages/class/class.vue"]]);
wx.createPage(MiniProgramPage);
