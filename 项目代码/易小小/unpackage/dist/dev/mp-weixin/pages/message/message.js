"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    bindClick(event, index) {
      let _this = this;
      if (event.content.text == "\u5220\u9664") {
        common_vendor.index.showModal({
          title: "\u63D0\u793A",
          content: "\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u6761\u6D88\u606F\u5417\uFF1F",
          cancelText: "\u53D6\u6D88",
          confirmText: "\u786E\u5B9A",
          success(res) {
            if (res.confirm) {
              _this.MessageData.splice(index, 1);
              _this.count = _this.MessageData.length;
              _this.numbersigh();
            }
          }
        });
      }
    },
    numbersigh() {
      let len = this.MessageData.length;
      this.count = len;
      let tabmsg = this.count.toString();
      if (this.count > 100) {
        common_vendor.index.setTabBarBadge({
          index: 2,
          text: "99+"
        });
      } else if (this.count > 0) {
        common_vendor.index.setTabBarBadge({
          index: 2,
          text: tabmsg
        });
      }
    }
  },
  data() {
    return {
      count: 22,
      ifshoe: true,
      clickindex: -1,
      ScreenWidth: 0,
      options: [
        {
          text: "\u53D6\u6D88",
          style: {
            backgroundColor: "#007aff"
          }
        },
        {
          text: "\u5220\u9664",
          style: {
            backgroundColor: "#dd524d"
          }
        }
      ],
      MessageData: [
        {
          id: 0,
          image: "/static/navigator/icon4.png",
          name: "\u6613\u7269\u56E2\u961F",
          type: 1,
          content: "\u6CE8\u610F\uFF1A\u8BE5\u9875\u9762\u663E\u793A\u7684\u6D88\u606F\u4EC5\u505A\u6D4B\u8BD5\u7528\u9014",
          time: "2022/11/2"
        },
        {
          id: 1,
          image: "/static/navigator/icon4.png",
          name: "\u6613\u7269\u56E2\u961F",
          type: 1,
          content: "\u7981\u6B62\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u7684\u8F6C\u8F7D",
          time: "2022/11/6"
        },
        {
          id: 2,
          image: "/static/navigator/icon4.png",
          name: "\u6613\u7269\u56E2\u961F",
          type: 1,
          content: "\u6216\u5176\u4ED6\u4E0D\u5F53\u7528\u9014",
          time: "2022/11/8"
        },
        {
          id: 3,
          image: "https://img2.woyaogexing.com/2022/11/06/a6f8e476813c58c1!400x400.jpg",
          name: "Ww\u82AC\u82ACya",
          type: 0,
          content: "\u8981\u662F\u90A3\u5929\uFF0C\u6211\u6293\u4F4F\u4F60\u5C31\u597D\u4E86",
          time: "2022/11/5"
        },
        {
          id: 4,
          image: "https://img2.woyaogexing.com/2022/11/05/c7c85b5880408145!400x400.jpg",
          name: "\u4F55",
          type: 0,
          content: "\u540E\u6765\u554A\uFF0C\u4E66\u6CA1\u6709\u8BFB\u597D\uFF0C\u559C\u6B22\u7684\u4EBA\u4E5F\u6CA1\u6709\u5728\u4E00\u8D77",
          time: "2022/11/8"
        },
        {
          id: 5,
          image: "https://img2.woyaogexing.com/2022/11/05/989d6a54d361f2e3!400x400.jpg",
          name: "\u6C5F\u610F\u95F4",
          type: 0,
          content: "\u540E\u6765\uFF0C\u5357\u5C71\u7684\u98CE\u5439\u6563\u4E86\u8C37\u5806\uFF0C\u5317\u6D77\u7684\u6C34\u6DF9\u6CA1\u4E86\u5893\u7891",
          time: "2022/11/8"
        },
        {
          id: 6,
          image: "https://img2.woyaogexing.com/2022/11/05/c0b05851a8215a7d!400x400.jpg",
          name: "\u9752\u886B\u9690",
          type: 0,
          content: "\u4F60\u6839\u672C\u5FD8\u4E0D\u4E86\u4E00\u4E2A\u8BA4\u8BA4\u771F\u771F\u7231\u8FC7\u7684\u4EBA\uFF0C\u4F60\u4EE5\u4E3A\u9519\u8FC7\u7684\u662F\u4E00\u4E2A\u4EBA\uFF0C\u5176\u5B9E\u4F60\u9519\u8FC7\u7684\u662F\u4E00\u6574\u4E2A\u4EBA\u751F",
          time: "2022/11/7"
        },
        {
          id: 7,
          image: "https://img2.woyaogexing.com/2022/11/05/e2571d6cad042d0f!400x400.jpg",
          name: "\u796D\u6D41\u5E74",
          type: 0,
          content: "\u6240\u6709\u4E0D\u5408\u65F6\u5B9C\u7684\u76F8\u9047\uFF0C\u90FD\u662F\u9057\u61BE\u8BA9\u4EBA\u5FC3\u75BC",
          time: "2022/11/22"
        },
        {
          id: 8,
          image: "https://img2.woyaogexing.com/2022/11/06/c6d8b00180d98b06!400x400.jpg",
          name: "\u5FF5\u5F80\u6614",
          type: 0,
          content: "\u90A3\u5929\u8F66\u7A97\u8D77\u96FE\u4E86\u6211\u5199\u4E86\u4F60\u7684\u540D\u5B57 \u540E\u6765\u96FE\u6563\u4E86 \u540D\u5B57\u6A21\u7CCA\u4E86 \u4F60\u4E0D\u89C1\u4E86 \u6211\u4EEC\u56DE\u4E0D\u53BB\u4E86",
          time: "2022/11/12"
        },
        {
          id: 9,
          image: "https://img2.woyaogexing.com/2022/11/06/4358607bc6b7cad7!400x400.jpg",
          name: "\u51B0\u6620\u6708",
          type: 0,
          content: "\u4ECE\u6765\u6CA1\u6709\u4EBA\u6B63\u5F0F\u8DDF\u6211\u8BF4 \u201C\u6211\u4EEC\u5728\u4E00\u8D77\u5427\u201D \uFF0C\u7136\u800C\u5230\u6700\u540E\u90FD\u4F1A\u6B63\u5F0F\u7684\u8DDF\u6211\u8BF4 \u201C\u5BF9\u4E0D\u8D77\u201D\u3002",
          time: "2022/11/23"
        },
        {
          id: 10,
          image: "https://img2.woyaogexing.com/2022/11/06/7770f68b1b5e5533!400x400.jpg",
          name: "\u79BB\u5FC3\u8BED",
          type: 0,
          content: "\u6211\u8FD9\u4EFD\u60AC\u5728\u534A\u7A7A\u7684\u559C\u6B22\uFF0C\u98DE\u4E0D\u8FC7\u5343\u5C71\u4E07\u6C34\u4E86",
          time: "2022/11/20"
        },
        {
          id: 11,
          image: "https://img2.woyaogexing.com/2022/11/06/12b2997776a814fb!400x400.jpg",
          name: "\u957F\u6068\u6B4C",
          type: 0,
          content: "\u8FD8\u80FD\u518D\u89C1\u4F60\u4E00\u9762\u4E48 \u6211\u53EF\u4EE5\u7AD9\u7684\u5F88\u8FDC",
          time: "2022/11/20"
        },
        {
          id: 12,
          image: "https://img2.woyaogexing.com/2022/11/06/998352bc5c8b8c03!400x400.jpg",
          name: "\u9189\u6E05\u98CE",
          type: 0,
          content: "\u6211\u4EEC\u90FD\u5728\u5954\u8D74\u4E0D\u540C\u7684\u4EBA\u751F\u4E86",
          time: "2022/11/24"
        },
        {
          id: 13,
          image: "https://img2.woyaogexing.com/2022/11/06/9177ae2a0e827ad7!400x400.png",
          name: "\u610F\u541B\u516E",
          type: 0,
          content: "\u201C\u8FC7\u4E86\u51E0\u5E74 \u4F60\u4F1A\u4E0D\u4F1A\u7A81\u7136\u60F3\u8D772020\u957F\u8FBE4\u4E2A\u6708\u7684\u5BD2\u5047 \u75AB\u60C5\u7206\u53D1 \u9489\u9489\u5954\u6E83 \u7F51\u6613\u4E91\u9ED1\u8272 \u8FD8\u6709\u4F60\u9519\u8FC7\u4E86\u6211 \u201D",
          time: "2022/11/15"
        },
        {
          id: 14,
          image: "https://img2.woyaogexing.com/2022/11/06/45c8d13de24e54f9!400x400.jpg",
          name: "\u7B11\u5FF5\u4F0A\u4EBA",
          type: 0,
          content: "\u8FD9\u4E16\u4E0A\u7684\u6240\u6709\u201C\u7A81\u7136\u60F3\u8D77\u201D\u90FD\u662F\u201C\u4E00\u76F4\u653E\u5728\u5FC3\u4E0A\u201D",
          time: "2022/11/17"
        },
        {
          id: 15,
          image: "https://img2.woyaogexing.com/2022/11/06/a378c123e39cc56c!400x400.jpg",
          name: "\u6DE1\u58A8\u65E0\u6B87",
          type: 0,
          content: "\u6211\u6700\u5927\u7684\u9057\u61BE\uFF0C\u662F\u4F60\u7684\u9057\u61BE\u4E0E\u6211\u6709\u5173",
          time: "2022/11/16"
        },
        {
          id: 16,
          image: "https://img2.woyaogexing.com/2022/11/06/5aec0c3d04b21a4a!400x400.jpg",
          name: "\u753B\u7709\u5982\u9EDB",
          type: 0,
          content: "\u4F60\u770B\uFF0C\u4E16\u4EBA\u591A\u5947\u602A\u3002\u559C\u6B22\u7684\u4EBA\u5F97\u4E0D\u5230\uFF0C\u5F97\u5230\u4E86\u4E0D\u73CD\u60DC\uFF0C\u5728\u4E00\u8D77\u65F6\u6000\u7591\uFF0C\u5931\u53BB\u4E86\u6000\u5FF5\uFF0C\u6000\u5FF5\u7684\u60F3\u76F8\u89C1\uFF0C\u76F8\u89C1\u7684\u53C8\u6068\u665A\u3002\u7EC8\u5176\u4E00\u751F\uFF0C\u6EE1\u662F\u9057\u61BE\u3002",
          time: "2022/11/18"
        },
        {
          id: 17,
          image: "https://img2.woyaogexing.com/2022/11/06/3b0c5d21cab368e0!400x400.jpg",
          name: "\u671D\u5915\u76FC\u516E",
          type: 0,
          content: "\u4ECE\u524D\u4ECE\u524D\u6709\u4E2A\u4EBA\u7231\u4F60\u5F88\u4E45 \u4F46\u504F\u504F\u98CE\u6E10\u6E10\u628A\u8DDD\u79BB\u5439\u5F97\u597D\u8FDC",
          time: "2022/11/19"
        },
        {
          id: 18,
          image: "https://img2.woyaogexing.com/2022/11/06/00f5d62121409f2f!400x400.jpg",
          name: "\u6545\u57CE",
          type: 0,
          content: "\u5F88\u62B1\u6B49\uFF0C\u7EC8\u7A76\u6CA1\u80FD\u6210\u4E3A\u4F60\u7684\u4F8B\u5916",
          time: "2022/11/20"
        },
        {
          id: 19,
          image: "https://img2.woyaogexing.com/2022/11/06/86cc893647395858!400x400.jpg",
          name: "\u753B\u537F\u989C",
          type: 0,
          content: "\u6211\u4EEC\u597D\u50CF\u4E0D\u8BE5\u8FD9\u6837 \u4E0D\u6B62\u8FD9\u6837 \u4F46\u53EA\u80FD\u8FD9\u6837\u4E86",
          time: "2022/11/25"
        },
        {
          id: 20,
          image: "https://img2.woyaogexing.com/2022/11/06/48cbebafdaeb8529!400x400.jpg",
          name: "\u5982\u66F2\u7EC8\u7834\u5C18",
          type: 0,
          content: "\u665A\u70B9\u6CA1\u5173\u7CFB \u6211\u53EF\u4EE5\u7B49\u4F60 \u4F46\u4F60\u4E00\u5B9A\u8981\u6765 \u5982\u679C\u4F60\u6CA1\u6765 \u90A3\u5C31\u5F53\u6708\u4EAE\u5931\u7EA6\u4E86\u5427",
          time: "2022/11/26"
        },
        {
          id: 21,
          image: "https://img2.woyaogexing.com/2022/11/06/86aca07e688e2255!400x400.jpg",
          name: "\u4E00\u6811\u6447\u5149",
          type: 0,
          content: "\u6709\u4E9B\u6545\u4E8B\u6CA1\u8BB2\u5B8C\uFF0C\u90A3\u5C31\u7B97\u4E86\u5427",
          time: "2022/11/30"
        }
      ]
    };
  },
  onReady() {
    let Width = 0;
    common_vendor.index.getSystemInfo({
      success(res) {
        Width = res.screenWidth;
      }
    });
    this.ScreenWidth = Width;
    this.numbersigh();
  }
};
if (!Array) {
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (_easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.count > 0
  }, $data.count > 0 ? {
    b: common_vendor.t($data.count)
  } : {}, {
    c: $data.ScreenWidth + "px",
    d: common_vendor.f($data.MessageData, (data, index, i0) => {
      return common_vendor.e({
        a: data.image,
        b: common_vendor.t(data.name),
        c: data.type == 1
      }, data.type == 1 ? {} : {}, {
        d: common_vendor.t(data.time),
        e: common_vendor.t(data.content),
        f: common_vendor.o(($event) => $options.bindClick($event, index)),
        g: "5f8e51f4-1-" + i0 + "," + ("5f8e51f4-0-" + i0),
        h: "5f8e51f4-0-" + i0,
        i: index
      });
    }),
    e: common_vendor.p({
      threshold: 0,
      ["right-options"]: $data.options
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/LENOVO/Desktop/\u6613\u7269/\u6613\u7269/pages/message/message.vue"]]);
wx.createPage(MiniProgramPage);
