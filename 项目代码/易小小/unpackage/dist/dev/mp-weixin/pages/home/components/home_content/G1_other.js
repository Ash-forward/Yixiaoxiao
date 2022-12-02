"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  onReady() {
    let screenwid = 0;
    common_vendor.index.getSystemInfo({
      success(res) {
        screenwid = res.screenWidth;
      }
    });
    this.Width = screenwid;
  },
  data() {
    return {
      Width: 0,
      NeedsData: [
        {
          name: "fksb",
          imglink: "https://tse2-mm.cn.bing.net/th/id/OIP-C.ex7IED2b2rO_8YdslDUD_gAAAA?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u793C\u54C1\u76D2\uFF0C\u4E0D\u8981\u5F88\u5927\uFF0C\u53EF\u4EE5\u88C5\u767E\u6765\u5F20 \u4FBF\u5229\u8D34\u3002",
          budget: 15,
          time: "2022/11/2",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "other",
          cart: "\u5176\u4ED6"
        },
        {
          name: "keep",
          imglink: "https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u5927\u5B66\u7269\u7406\u5B9E\u9A8C\u7B2C\u4E09\u7248\u5927\u4E00",
          budget: 15,
          time: "2022/11/5",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          name: "dfosnvsdgbfh",
          imglink: "https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u4E00\u4E2A\u53E3\u7EA2",
          budget: 50,
          time: "2022/11/12",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "makeup",
          cart: "\u7F8E\u5986"
        },
        {
          name: "keep",
          imglink: "https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u5927\u5B66\u7269\u7406\u5B9E\u9A8C\u7B2C\u4E09\u7248\u5927\u4E00",
          budget: 15,
          time: "2022/11/5",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          name: "dfosnvsdgbfh",
          imglink: "https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u4E00\u4E2A\u53E3\u7EA2",
          budget: 50,
          time: "2022/11/12",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "makeup",
          cart: "\u7F8E\u5986"
        },
        {
          name: "keep",
          imglink: "https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u5927\u5B66\u7269\u7406\u5B9E\u9A8C\u7B2C\u4E09\u7248\u5927\u4E00",
          budget: 15,
          time: "2022/11/5",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          name: "dfosnvsdgbfh",
          imglink: "https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u4E00\u4E2A\u53E3\u7EA2",
          budget: 50,
          time: "2022/11/12",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "makeup",
          cart: "\u7F8E\u5986"
        },
        {
          name: "keep",
          imglink: "https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u5927\u5B66\u7269\u7406\u5B9E\u9A8C\u7B2C\u4E09\u7248\u5927\u4E00",
          budget: 15,
          time: "2022/11/5",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          name: "dfosnvsdgbfh",
          imglink: "https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u4E00\u4E2A\u53E3\u7EA2",
          budget: 50,
          time: "2022/11/12",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "makeup",
          cart: "\u7F8E\u5986"
        },
        {
          name: "keep",
          imglink: "https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u5927\u5B66\u7269\u7406\u5B9E\u9A8C\u7B2C\u4E09\u7248\u5927\u4E00",
          budget: 15,
          time: "2022/11/5",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          name: "dfosnvsdgbfh",
          imglink: "https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u4E00\u4E2A\u53E3\u7EA2",
          budget: 50,
          time: "2022/11/12",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "makeup",
          cart: "\u7F8E\u5986"
        },
        {
          name: "dfosnvsdgbfh",
          imglink: "https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u4E00\u4E2A\u53E3\u7EA2",
          budget: 50,
          time: "2022/11/12",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "makeup",
          cart: "\u7F8E\u5986"
        },
        {
          name: "keep",
          imglink: "https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u5927\u5B66\u7269\u7406\u5B9E\u9A8C\u7B2C\u4E09\u7248\u5927\u4E00",
          budget: 15,
          time: "2022/11/5",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          name: "dfosnvsdgbfh",
          imglink: "https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u4E00\u4E2A\u53E3\u7EA2",
          budget: 50,
          time: "2022/11/12",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "makeup",
          cart: "\u7F8E\u5986"
        },
        {
          name: "keep",
          imglink: "https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u5927\u5B66\u7269\u7406\u5B9E\u9A8C\u7B2C\u4E09\u7248\u5927\u4E00",
          budget: 15,
          time: "2022/11/5",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          name: "dfosnvsdgbfh",
          imglink: "https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u4E00\u4E2A\u53E3\u7EA2",
          budget: 50,
          time: "2022/11/12",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "makeup",
          cart: "\u7F8E\u5986"
        },
        {
          name: "dfosnvsdgbfh",
          imglink: "https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u4E00\u4E2A\u53E3\u7EA2",
          budget: 50,
          time: "2022/11/12",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "makeup",
          cart: "\u7F8E\u5986"
        },
        {
          name: "keep",
          imglink: "https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u5927\u5B66\u7269\u7406\u5B9E\u9A8C\u7B2C\u4E09\u7248\u5927\u4E00",
          budget: 15,
          time: "2022/11/5",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          name: "dfosnvsdgbfh",
          imglink: "https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u4E00\u4E2A\u53E3\u7EA2",
          budget: 50,
          time: "2022/11/12",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "makeup",
          cart: "\u7F8E\u5986"
        },
        {
          name: "keep",
          imglink: "https://tse3-mm.cn.bing.net/th/id/OIP-C.vY_4ct7RlTjwgupvdMaR0AD6D6?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u5927\u5B66\u7269\u7406\u5B9E\u9A8C\u7B2C\u4E09\u7248\u5927\u4E00",
          budget: 15,
          time: "2022/11/5",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          name: "dfosnvsdgbfh",
          imglink: "https://tse2-mm.cn.bing.net/th/id/OIP-C.CDYpvY5nfIeB8J_qJ_AwEAAAAA?w=197&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          contant: " \u6C42\u4E00\u4E2A\u53E3\u7EA2",
          budget: 50,
          time: "2022/11/12",
          pos: "\u674E\u767D\u6CB3\u6821\u533A",
          tag: "makeup",
          cart: "\u7F8E\u5986"
        }
      ]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.NeedsData, (item, index, i0) => {
      return {
        a: item.imglink,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.pos),
        d: common_vendor.t(item.time),
        e: common_vendor.t(item.contant),
        f: common_vendor.t(item.budget),
        g: index
      };
    }),
    b: $data.Width - 48 + "px",
    c: $data.Width
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d99c4842"], ["__file", "C:/Users/LENOVO/Desktop/\u6613\u7269/\u6613\u7269/pages/home/components/home_content/G1_other.vue"]]);
wx.createComponent(Component);
