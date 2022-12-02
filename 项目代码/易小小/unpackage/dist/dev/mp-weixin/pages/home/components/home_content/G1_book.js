"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  onReady() {
    let i = 0;
    let temp = 0;
    let newwidth = 0;
    let tempwidth = 0;
    let resarr = this.resarr;
    let staarr = this.GoodsDataDefault;
    common_vendor.index.getSystemInfo({
      success(res) {
        tempwidth = res.screenWidth;
      }
    });
    temp = (tempwidth - 320) / 3;
    newwidth = temp.toString() + "px";
    this.elementstyle = {
      marginLeft: newwidth
    };
    staarr.forEach((item, index) => {
      if (item.tag == "book") {
        this.currentarr[i] = index;
        resarr.push(staarr[index]);
        i++;
      }
    });
    this.resarr = resarr;
    this.cart();
  },
  methods: {
    cart() {
      let _this = this;
      let temp = [];
      _this.Goodtemp = _this.resarr;
      common_vendor.index.$on("rankcode", function(data) {
        if (data.value == 1) {
          _this.resarr = _this.resarr.sort((G1, G2) => G2.newPrice - G1.newPrice);
        } else if (data.value == 2) {
          _this.resarr = _this.resarr.sort((G1, G2) => G1.newPrice - G2.newPrice);
        } else if (data.value == 4) {
          if (data.min == "" || data.max == "") {
            _this.resarr = _this.Goodtemp;
          } else {
            temp = [];
            _this.Goodtemp.forEach((item, index) => {
              _this.resarr = [];
              let min = parseInt(data.min);
              let max = parseInt(data.max);
              if (item.newPrice >= min && item.newPrice <= max) {
                temp.push(item);
              }
            });
            _this.resarr = temp;
          }
        }
      });
    },
    scroll_index(event) {
      if (this.currentscroll != 0) {
        this.ifshow = true;
      } else {
        this.ifshow = false;
      }
      this.currentscroll = Math.round(event.detail.scrollTop);
    },
    totop() {
      this.scrolltop = Math.random();
    },
    navi_deteial(index) {
      let currentarr = this.currentarr;
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail",
        events: {
          acceptDataFromOpenedPage: function(data) {
            console.log(data);
          },
          someEvent: function(data) {
            console.log(data);
          }
        },
        success: function(res) {
          res.eventChannel.emit("acceptDataFromOpenerPage", currentarr[index]);
        }
      });
    }
  },
  data() {
    return {
      ifshow: false,
      scrolltop: 0,
      currentscroll: 0,
      elementstyle: {},
      resarr: [],
      currentarr: [],
      Goodtemp: [],
      GoodsDataDefault: [
        {
          id: 0,
          selever: "\u4E66\u6028\u781A\u6E0A",
          title: "\u5C18\u5B50\u9189 \u3010\u5316\u8776\u3011 \u82B1\u57CE\u884D\u751F\u9762\u5177\u8774\u8776\u914D\u9970\u7C2A\u5B50\u53D1\u7C2A",
          ifnew: 56,
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/2933460057/O1CN0177Askx1CI9Lhxyxje_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",
          oldPrice: 999,
          newPrice: 850,
          tag: "hair",
          cart: "\u53D1\u7C2A"
        },
        {
          id: 1,
          selever: "\u7530\u662F\u8377\u53F6\u7530\u7530\u7684\u753026314744",
          title: "\u3010\u91D1\u83B2\u3011\u798F\u7530\u5999\u679C\u53E4\u98CE\u6C49\u670D\u53D1\u7C2A\u5B50\u53D1\u5939\u5168\u65B0\u843D\u6625\u6D41\u540C\u6B3E",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/4011580509/O1CN01yhVMZv1FdAOALfto5_!!4011580509.jpg_360x360Q90.jpg_.webp",
          oldPrice: 48,
          newPrice: 40,
          tag: "hair",
          cart: "\u53D1\u7C2A"
        },
        {
          id: 2,
          selever: "Ww\u82AC\u82ACya",
          title: "3\u7F8E\u5986\u86CB+1\u4E2A\u7F8E\u5986\u86CB\u67B6\u5B508\u5143 \u4E00\u6574\u76D2\u5168\u65B0",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://gw.alicdn.com/imgextra/i3/4133581371/O1CN01RUSa2b1LzxmuFaErw_!!4133581371.jpg_Q75.jpg_.webp",
          oldPrice: 10,
          newPrice: 8,
          tag: "makeup",
          cart: "\u7F8E\u5986"
        },
        {
          id: 3,
          selever: "\u826F\u54C1\u94FA\u5B50\u65D7\u8230\u5E97",
          title: " \u826F\u54C1\u94FA\u5B50\u732A\u8089\u812F\u5E72\u9756\u6C5F\u7F51\u7EA2\u89E3\u998B\u5373\u98DF\u719F\u96F6\u98DF\u5C0F\u5403\u4F11\u95F2",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/131425407/O1CN01jMoQ4o1poSGsrIkCI_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",
          oldPrice: 24.9,
          newPrice: 23,
          tag: "food",
          cart: "\u96F6\u98DF"
        },
        {
          id: 4,
          selever: "\u4F55",
          title: "\u674E\u4F73\u57FC100\u5206\u7C89\u6251\u68C9\u82B1\u7CD6\u7F8E\u5986\u86CB\u7C89\u5E95\u6DB2\u4E13\u7528",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/2201262696396/O1CN01owEGZZ1x7Pvr2L9S3_!!2201262696396.jpg_430x430q90.jpg",
          oldPrice: 29,
          newPrice: 20,
          tag: "makeup",
          cart: "\u7F8E\u5986"
        },
        {
          id: 5,
          selever: "\u6728\u6751\u8000\u53F8\u65D7\u8230\u5E97",
          title: " \u53CC\u80A9\u5305\u7537\u58EB\u7B80\u7EA6\u767E\u642D\u5927\u5BB9\u91CF\u5C0F\u578B\u65C5\u884C\u80CC\u5305\u5973\u521D\u4E2D\u751F\u9AD8",
          ifnew: 78,
          remaker: "",
          imglink: "https://img.alicdn.com/imgextra/i1/117575163/O1CN014I4bYt1o0hSqdEtSK_!!0-saturn_solar.jpg_200x200.jpg",
          oldPrice: 62.1,
          newPrice: 62.1,
          tag: "shcoolbag",
          cart: "\u4E66\u5305"
        },
        {
          id: 6,
          selever: "Disciple",
          title: "\u5996\u5236\u7C89\u6251\u86CB\u9EC4\u6D3E\u83E0\u841D\u6D3E\u6C14\u5986\u86CB\u5316\u5986\u68C9\u5E72\u6E7F\u4E24\u7528",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://gw.alicdn.com/imgextra/i1/2208157155426/O1CN01ZvGcfl1px9mWtqSJg_!!2208157155426.jpg_Q75.jpg_.webp",
          oldPrice: 12,
          newPrice: 10,
          tag: "makeup",
          cart: "\u7F8E\u5986"
        },
        {
          id: 7,
          selever: "\u5929\u56FD\u5C11\u597311",
          title: "8\u4E2A\u88C5|\u7F8E\u5986\u86CB\u8D85\u8F6F\u6DB2\u4E13\u7528\u5F69\u5986\u86CB",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://img.alicdn.com/imgextra/i2/2201262696396/O1CN01a3NRVY1x7Q0i0FZXe_!!2201262696396.jpg_430x430q90.jpg",
          oldPrice: 15,
          newPrice: 12,
          tag: "makeup",
          cart: "\u7F8E\u5986"
        },
        {
          id: 8,
          selever: "\u5C0F\u82B1s4m8565",
          title: "\u4E8C\u624B\u6D3B\u7740 \u4F59\u534E",
          ifnew: 95,
          remaker: "",
          imglink: "https://gw.alicdn.com/imgextra/i2/2414369401/O1CN01bHMPwy2JJiCeHSd2v_!!2414369401.jpg_Q75.jpg_.webp",
          oldPrice: 35,
          newPrice: 19.9,
          tag: "book",
          cart: " \u4E66\u672C"
        },
        {
          id: 9,
          selever: "\u56DE\u5FC6\u7AE5\u989C\u65E0\u5FCC",
          title: "\u6D3B\u77402012\u7248\u5E73\u88C5\u4F59\u534E\u4F5C\u5BB6\u6B63\u7248\u4E8C\u624B\u65E7\u4E66",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://gw.alicdn.com/imgextra/i2/1708549076/O1CN01Qd925x2GurRYkdLES_!!1708549076.jpg_Q75.jpg_.webp",
          oldPrice: 20,
          newPrice: 10,
          tag: "book",
          cart: " \u4E66\u672C"
        },
        {
          id: 10,
          selever: "xiaozhi7899",
          title: "\u76DB\u5510\u3010\u4E2D\u53E4\u4F18\u54C1\u3011\u4E8C\u624B\u5305\u5305 \u5586\u5586\u5B9A\u91D1\u4E13\u62CD",
          ifnew: "\u4E8C\u624B",
          remaker: "",
          imglink: "https://img.alicdn.com/imgextra/i4/698598873/O1CN01Ort5vm2FPt5Bi6Qbq_!!698598873.jpg_400x400.jpg",
          oldPrice: 1e3,
          newPrice: 500,
          tag: "bag",
          cart: "\u5305\u5305"
        },
        {
          id: 11,
          selever: "mink\u5B9D\u8D1D",
          title: "\u76DB\u5510\u3010\u53CC\u5341\u4E00\u95ED\u773C\u5165\u3011\u4E8C\u624B\u5305\u5305LV\u5C0F\u53F7\u8D2D\u7269\u888B 83723",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://img.alicdn.com/imgextra/i1/198595514/O1CN01dhCEQk1qbSfxEcwh6_!!198595514.jpg",
          oldPrice: 7899,
          newPrice: 7500,
          tag: "bag",
          cart: "\u5305\u5305"
        },
        {
          id: 12,
          selever: "kiko\u89C5\u5B9D\u5BB6",
          title: "\u76DB\u5510\u3010\u4E2D\u53E4\u4F18\u54C1\u3011\u4E8C\u624B\u5305\u5305YSL\u767D\u8272NIKI\u6258\u7279",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://img.alicdn.com/imgextra/i3/14048205/O1CN01NQrL7i2ATwV8b3K9e_!!0-saturn_solar.jpg_468x468q75.jpg_.webp",
          oldPrice: 7999,
          newPrice: 7600,
          tag: "bag",
          cart: "\u5305\u5305"
        },
        {
          id: 13,
          selever: "jinjunjian",
          title: "\u6E05\u4EE3\uFF0C\u6C11\u56FD\u94F6\u7C2A\u5B50 \u53E4\u8463\u53E4\u73A9\u6742\u9879\u94F6\u5668\u7389\u82B1\u4EF6\u5C0F\u7C2A\u5B50",
          ifnew: 85,
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/4137011410/O1CN01fnQy4D1MHpF2rGIND_!!4137011410.png_360x360Q90.jpg_.webp",
          oldPrice: 230,
          newPrice: 200,
          tag: "hair",
          cart: "\u53D1\u7C2A"
        },
        {
          id: 14,
          selever: "\u98DF\u5BA2\u661F\u513F",
          title: "\u3010\u56E2\u8D2D\u3011obitsu/ob\u5A03/6\u5206\u4E09\u5206\u5C71\u6CB3\u4EE4\u6E29\u5BA2\u884C\u8427\u7C2A\u5B50",
          ifnew: 95,
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/3335579257/O1CN01pDdBWY2IFlAaAca7z_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
          oldPrice: 13,
          newPrice: 8,
          tag: "hair",
          cart: "\u53D1\u7C2A"
        },
        {
          id: 15,
          selever: "\u5510\u5341\u516B\u5B5077",
          title: "\u660E\u4EE3\u933E\u523B\u56DE\u5B57\u8FB9\u82B1\u7EB9\u5982\u610F\u5F62\u7684 \u8001\u94F6\u53D1\u7C2A\u5B50\u53CC\u5C16",
          ifnew: 75,
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/1077067571/O1CN01IjRLY925nZP9Y8xGH_!!1077067571.jpg_360x360Q90.jpg_.webp",
          oldPrice: 480,
          newPrice: 320,
          tag: "hair",
          cart: "\u53D1\u7C2A"
        },
        {
          id: 16,
          selever: "bikaiyao",
          title: "\u53E4\u8463\u8001\u7269\u4EF6\u7389\u5668\u6536\u85CF\u6E05\u4EE3\u548C\u7530\u767D\u7389\u559C\u9E4A\u62A5\u559C\u9E1F\u7C2A\u5B50\u5934",
          ifnew: 75,
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2207500366123/O1CN01zJCmbO1v6NthmwxsG_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
          oldPrice: 46,
          newPrice: 42,
          tag: "hair",
          cart: "\u53D1\u7C2A"
        },
        {
          id: 17,
          selever: "\u6765\u798Fa\u6765\u798F",
          title: "\u6536\u85CF\u53E4\u8463\u8001\u7269\u4EF6\u6E05\u4EE3\u8001\u9AA8\u5236\u54C1\u4F5B\u624B\u6301\u82B1\u7C2A\u5B50\u5934",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2214084751820/O1CN01ufdYLh1PJbcufTydb_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
          oldPrice: 1300,
          newPrice: 1200,
          tag: "hair",
          cart: "\u53D1\u7C2A"
        },
        {
          id: 18,
          selever: "\u6765\u798Fa\u6765\u798F",
          title: "\u53E4\u73A9\u53E4\u8463\u8001\u94F6\u7C2A\u5B50\u70B9\u7FE0\u7C2A\u5B50\u8001\u94F6\u739B\u7459\u7C2A\u5B50\uFF08\u4EF7\u683C\u4E0D\u7B49\u8BF7\u8BAE",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/1655070820/O1CN01T0aF2y1HvbZ4bdAyO_!!1655070820.jpg_360x360Q90.jpg_.webp",
          oldPrice: 888,
          newPrice: 750,
          tag: "hair",
          cart: "\u53D1\u7C2A"
        },
        {
          id: 19,
          selever: "\u7A7F\u6BD4\u57FA\u5C3C\u7684\u718A\u7238\u7238",
          title: " A5\u5E26\u9501\u65E5\u8BB0\u672C\u5BC6\u7801\u9501\u7B14\u8BB0\u672CA6\u5B66\u751F\u8BB0\u4E8B\u672C\u6587\u5177\u672C\u5B50\u624B",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/1082360160/O1CN01NTRxwN1D3K7edv0Cp_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",
          oldPrice: 17.9,
          newPrice: 15.99,
          tag: "nodebook",
          cart: "\u7B14\u8BB0\u672C"
        },
        {
          id: 20,
          selever: "septemberwiner",
          title: "\u6668\u5149\u6587\u5177\u6B63\u54C1\u5B66\u751F\u82B1\u4E0E\u6D77\u7CFB\u5217\u7CBE\u88C5\u7ED1\u5E26\u672C A5\u7B14\u8BB0\u672C",
          ifnew: 65,
          remaker: "",
          imglink: "https://img.alicdn.com/imgextra/i4/129280969/O1CN016xORpR1J1qa1SlHtP_!!0-saturn_solar.jpg_200x200.jpg",
          oldPrice: 29.9,
          newPrice: 12.2,
          tag: "nodebook",
          cart: "\u7B14\u8BB0\u672C"
        },
        {
          id: 21,
          selever: "\u5B9A\u5DDE\u53E4\u65E7\u4E66\u5E97",
          title: "\u9605\u53E4\u658B\u65E5\u672C\u56DE\u6D41\u540D\u724C\u6B63\u54C1\u5706\u73E0\u7B14\u6000\u65E7\u5B66\u751F\u7EC3\u5B57\u7B14\u8001\u6587\u5177\u6EE1\u4E94",
          ifnew: 95,
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/106044872/O1CN01w8Ljbp1lrQMLMVx4e_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",
          oldPrice: 33.9,
          newPrice: 32,
          tag: "nodebook",
          cart: "\u7B14\u8BB0\u672C"
        },
        {
          id: 22,
          selever: "\u521D\u514B\u65FA\u5E97",
          title: "\u6587\u5177\u6668\u5149\u4E2D\u6027\u7B14k35\u9ED1\u6309\u52A8\u5907\u8003\u5546\u52A1\u9ED1\u8272\u84DD\u8272\u4E66\u5199\u65E5\u5E38",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://img.alicdn.com/imgextra/i2/40598549/O1CN01UfHTae2D1UgKX10xQ_!!0-saturn_solar.jpg_200x200.jpg",
          oldPrice: 13.99,
          newPrice: 10.65,
          tag: "nodebook",
          cart: "\u7B14\u8BB0\u672C"
        },
        {
          id: 23,
          selever: "tb135091923",
          title: "\u6587\u5177\u53EF\u7231\u521B\u610F\u56DB\u53F6\u8349\u97E9\u56FD\u91D1\u5C5E\u6302\u4EF6\u8FF7\u4F60\u56FD\u6587\u5B66\u4E60\u5E78\u8FD0",
          ifnew: 75,
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/331340056/O1CN01tmr9Tb1CHgqtnzuHQ_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",
          oldPrice: 12.98,
          newPrice: 10,
          tag: "nodebook",
          cart: "\u7B14\u8BB0\u672C"
        },
        {
          id: 24,
          selever: "\u5723\u9999\u9999",
          title: " \u3010\u5199\u610F\u5C45\u3011\u5251\u7F51\u4E09 \u661F\u6F14\u79C0\u5A18cos \u661F\u6F14\u4E03\u79C0\u6210\u5973 \u8863\u670D\u914D",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://img.alicdn.com/imgextra/i4/113020020/O1CN01VLZyBF1C1CfHjdezO_!!0-saturn_solar.jpg_200x200.jpg",
          oldPrice: 1100,
          newPrice: 900,
          tag: "cosclothes",
          cart: "cos\u8863\u670D"
        },
        {
          id: 25,
          selever: "\u4E1C\u54E5\u54E5\u7684\u4EBA\u751F",
          title: " \u4E8C\u624B\u95F2\u7F6E\u5973\u58EB\u8863\u670D\u7F8A\u7ED2\u886B\u5957\u5934\u5706\u9886\u957F\u8896\u79CB\u51AC\u4FDD\u6696\u8863\u670D",
          ifnew: 78,
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2536199060/O1CN010JXAVv2GnX8gBNFhb_!!2536199060.jpg_360x360Q90.jpg_.webp",
          oldPrice: 670,
          newPrice: 500,
          tag: "choths",
          cart: " \u8863\u670D"
        },
        {
          id: 26,
          selever: "jamielau313",
          title: "\u4E8C\u624B \u4ED9\u5251\u5947\u4FA0\u4F20\u516D \u4ED9\u52516 \u660E\u7EE3 cos cosplay\u8863\u670D\u5168\u5957\u6E10\u53D8",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/162626278/TB2ze85aabyQeBjy1XbXXa9yXXa_!!162626278.jpg_360x360Q90.jpg_.webp",
          oldPrice: 650,
          newPrice: 300,
          tag: "cosclothes",
          cart: "cos\u8863\u670D"
        },
        {
          id: 27,
          selever: "ffantasy520",
          title: "cos\u670D \u9B54\u6CD5\u5C11\u5973\u5C0F\u5706 \u5DF4\u9EBB\u7F8E \u8863\u670D \u5934\u9970 \u5E3D\u5B50 \u5168\u5957",
          ifnew: 87,
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/1029570186/O1CN01wrxbGq1DFEL2NLSG8_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",
          oldPrice: 270,
          newPrice: 230,
          tag: "cosclothes",
          cart: "cos\u8863\u670D"
        },
        {
          id: 28,
          selever: "willowyc",
          title: "\u5B9E\u62CD\u8D25\u5BB6\u5973\u95F2\u7F6E\u5973\u88C5\u4E8C\u624B\u65E7\u8863\u670D\u88C5\u8BBA\u6309\u65A4\u6253\u5305\u79F0\u91CD\u7529\u5356",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/390170755/TB29DLWj3xlpuFjy0FoXXa.lXXa_!!390170755.jpg_360x360Q90.jpg_.webp",
          oldPrice: 452,
          newPrice: 352.99,
          tag: "clothes",
          cart: "\u8863\u670D"
        },
        {
          id: 29,
          selever: "\u79C0\u7F8E\u732A\u732A\u5546\u57CE",
          title: " 100%\u79CB\u5B63\u65B0\u54C1\u7EAF\u68C9\u957F\u8896t\u6064\u7537\u5706\u9886\u79CB\u8863\u6253\u5E95\u886B\u6F6E\u7537t\u6064",
          ifnew: 67,
          remaker: "",
          imglink: "https://img.alicdn.com/imgextra/i3/133275759/O1CN01BHY72o1sPfiGsN4ty_!!0-saturn_solar.jpg_200x200.jpg",
          oldPrice: 360.55,
          newPrice: 320.33,
          tag: "clothes",
          cart: "\u8863\u670D"
        },
        {
          id: 30,
          selever: "sgfchjgi",
          title: "\u88D8\u76AE\u3001\u76AE\u8349\u3001\u72D0\u72F8\u6BDB\u8863\u670D\u5E72\u6D17\u3001\u72D0\u72F8\u6BDB\u670D\u88C5\u5E72\u6D17\u670D\u52A1\uFF08\u77ED",
          ifnew: 87,
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/53520996/O1CN01PIhiA51JED6VdWKZh_!!53520996.jpg_360x360Q90.jpg_.webp",
          oldPrice: 423,
          newPrice: 242.22,
          tag: "clothes",
          cart: "\u8863\u670D"
        },
        {
          id: 31,
          selever: "xycdx007",
          title: "\u4E34\u671FL \u52B2\u4ED4\u624B\u6495\u7D20\u808923g\u9999\u8FA3\u9EBB\u8FA3\u7D20\u96F6\u98DF\u8C46\u5E72\u5236\u54C1\u6E56\u5357\u4F11\u95F2",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/47572845/O1CN01J0eZM01Wt3ZuXkMuc_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",
          oldPrice: 1,
          newPrice: 1,
          tag: "food",
          cart: "\u96F6\u98DF"
        },
        {
          id: 32,
          selever: "\u827E\u5C4B\u54C1\u724C",
          title: "\u6D77\u5B50\u4EC1\u5DF4\u897F\u624B\u5265\u677E\u5B50\u4F11\u95F2\u98DF\u54C1\u5F00\u53E3\u624B\u62E8\u677E\u5B50\u575A\u679C\u7092\u8D27",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/725677994/O1CN01jBTOsB28vIwFDMdtP_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
          oldPrice: 148,
          newPrice: 148,
          tag: "food",
          cart: "\u96F6\u98DF"
        },
        {
          id: 33,
          selever: "\u58A8\u5C45\u4E00\u5206\u4E8C",
          title: "\u3010\u6B63\u7248\u4E8C\u624B\u3011\u54C1\u8D28\u751F\u6D3B\xB7\u70D8\u7119\u8BFE\u5802\uFF1A\u5168\u5BB6\u6700\u7231\u7684\u5C0F\u751C\u70B9\u3001\u5C0F\u96F6",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/1217420099/O1CN01bd0UzM1CbO0825wTr_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",
          oldPrice: 8.69,
          newPrice: 8.69,
          tag: "food",
          cart: "\u96F6\u98DF"
        },
        {
          id: 34,
          selever: "\u826F\u54C1\u94FA\u5B50\u65D7\u8230\u5E97",
          title: " \u826F\u54C1\u94FA\u5B50\u96F6\u98DF\u5927\u793C\u5305\u6574\u7BB1\u9001\u5973\u53CB\u8D85\u5927\u5DE8\u578B\u5305\u7F51\u7EA2\u7206\u6B3E",
          ifnew: 67,
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/619123122/O1CN01WqVckX1YvvJGdRutB_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
          oldPrice: 19.66,
          newPrice: 12.99,
          tag: "food",
          cart: "\u96F6\u98DF"
        },
        {
          id: 35,
          selever: "\u4E1C\u6210\u98DF\u54C1\u4E13\u8425",
          title: "\u91D1\u78E8\u574A60\u5305\u96F6\u98DF\u793C\u5305\u9EBB\u8FA3\u7F51\u7EA2\u5C0F",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/1636772035/O1CN01LsiQdA1Qu4mizMqtc_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
          oldPrice: 52,
          newPrice: 25,
          tag: "food",
          cart: "\u96F6\u98DF"
        },
        {
          id: 36,
          selever: "\u6765\u4F0A\u4EFD\u5B98\u65B9\u65D7\u8230\u5E97",
          title: " \u6765\u4F0A\u4EFD\u96F6\u98DF\u8D29\u5356\u673A\u5C0F\u5403\u89E3\u998B\u5C0F\u96F6\u98DF\u4F11\u95F2\u98DF\u54C1\u5927\u5168\u9001\u5973",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://picasso.alicdn.com/imgextra/863037/O1CNA1Pimgrender863037O1CN01cVHINu1YvvJIg17wF_!!0-item_pic.jpg?backup_url=O1CN01cVHINu1YvvJIg17wF_!!0-item_pic.jpg&p_context=eyJiaXoiOiJtYWMiLCJidWNrZXRJZCI6IkMiLCJjaGFubmVsIjoid3NlYXJjaGljb24taXRlbSIsIml0ZW1JZCI6IjQwMTAxNzI1OTMyIiwicGljVHlwZSI6InAxMSIsInJlbmRlckNvbmRpdGlvbiI6e30sInJlbmRlckRhdGEiOnt9fQ--&sign=863037b7caeddde3cd38287499b232bc&v=4.0_360x360Q90.jpg_.webp",
          oldPrice: 189,
          newPrice: 160.35,
          tag: "food",
          cart: "\u96F6\u98DF"
        },
        {
          id: 37,
          selever: "\u767E\u8349\u5473\u65D7\u8230\u5E97",
          title: "\u767E\u8349\u5473\u624B\u6495\u9762\u53051kg\u86CB\u7CD5\u65E9\u9910\u4EE3\u9910\u4F11\u95F2\u5C0F\u5403\u98DF\u54C1\u96F6\u98DF\u6574",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/131425407/O1CN01tTW56m1poSJa2F4v3_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp ",
          oldPrice: 26.9,
          newPrice: 25,
          tag: "food",
          cart: "\u96F6\u98DF"
        },
        {
          id: 38,
          selever: "\u536B\u9F99\u98DF\u54C1\u65D7\u8230\u5E97",
          title: " \u536B\u9F99\u9B54\u828B\u723D\u8FA3\u6761\u9B54\u828B\u7D20\u6BDB\u809A\u7D20\u8089\u597D\u5403\u529E\u516C\u5BA4\u96F6\u98DF\u5C0F\u5403",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/4197172177/O1CN01slNDrV1Rx6zriccvG_!!4197172177.jpg_360x360Q90.jpg_.webp",
          oldPrice: 14.9,
          newPrice: 13.55,
          tag: "food",
          cart: "\u96F6\u98DF"
        },
        {
          id: 39,
          selever: "\u4E09\u53EA\u677E\u9F20\u65D7\u8230\u5E97",
          title: "\u3010\u4E09\u53EA\u677E\u9F20_\u9EBB\u8FA3\u96F6\u98DF\u5927\u793C\u5305500g \u3011\u4F11\u95F2\u98DF\u54C1\u9E2D\u8089\u9E2D",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2209639454804/O1CN01sJG3uw1lMHMbbRZtR_!!2209639454804.jpg_360x360Q90.jpg_.webp",
          oldPrice: 19.9,
          newPrice: 15.2,
          tag: "food",
          cart: "\u96F6\u98DF"
        },
        {
          id: 40,
          selever: "\u9C7C\u81FB\u591A\u65D7\u8230\u5E97",
          title: " \u9999\u9165\u5C0F\u9EC4\u9C7C\u5E72\u9EC4\u82B1\u9C7C\u9165\u8106\u5373\u98DF\u5C0F\u9C7C\u5C0F\u5403\u4F11",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2206812956355/O1CN01OXoRob1wodlg5gofZ_!!2206812956355.jpg_360x360Q90.jpg_.webp",
          oldPrice: 34.9,
          newPrice: 32.1,
          tag: "food",
          cart: "\u96F6\u98DF"
        },
        {
          id: 41,
          selever: "\u5343\u725B\u82B1\u98DF\u54C1\u4E13\u8425\u5E97\u5E7F",
          title: "\u767E\u8349\u5473\u96F6\u98DF\u5927\u793C\u5305\u8089\u98DF\u7C7B\u591C\u5BB5\u5145\u9965\u4F11\u95F2",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2209035897788/O1CN012jmG1Q27OxKSOrtQg_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
          oldPrice: 125.1,
          newPrice: 120,
          tag: "food",
          cart: "\u96F6\u98DF"
        },
        {
          id: 42,
          selever: "\u4F18\u9EA6\u98DF\u54C1\u4E13\u8425\u5E97",
          title: "\u7518\u6E90\u9752\u8C46\u5B98\u65B9\u65D7\u8230\u5E97\u849C\u9999\u539F\u5473\u8C4C\u8C46\u82A5\u672B\u5473\u5C0F\u5403",
          ifnew: 67,
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2209002050534/O1CN01fcdGeD1FocHlqVVa7_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
          oldPrice: 15.9,
          newPrice: 14.3,
          tag: "food",
          cart: "\u96F6\u98DF"
        },
        {
          id: 43,
          selever: "\u91D1\u7F8E\u65F6\u65D7\u8230\u5E97",
          title: " \u4E66\u5305\u5973\u521D\u4E2D\u751F\u5927\u5BB9\u91CF\u65B0\u6B3E\u97E9\u72482022\u5973\u751F\u4E2D\u5B66\u751F\u9AD8\u4E2D\u751F",
          ifnew: 95,
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/126786776/O1CN01X7OrDi1zvSTp8vXi1_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",
          oldPrice: 20.99,
          newPrice: 18.56,
          tag: "shcoolbag",
          cart: "\u4E66\u5305"
        },
        {
          id: 44,
          selever: "\u91D1\u7F8E\u65F6\u65D7\u8230\u5E97",
          title: "\u4E66\u5305\u5973\u521D\u4E2D\u751F\u5927\u5BB9\u91CF\u65B0\u6B3E\u97E9\u72482022\u5973\u751F\u4E2D\u5B66\u751F\u9AD8\u4E2D\u751F",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/1046707508/O1CN01eEF6Kt25KiS4Ie67Y-1046707508.jpg_360x360Q90.jpg_.webp",
          oldPrice: 115.9,
          newPrice: 110.2,
          tag: "shcoolbag",
          cart: "\u4E66\u5305"
        },
        {
          id: 45,
          selever: "edison\u7BB1\u5305\u65D7\u8230\u5E97",
          title: "\u7231\u8FEA\u751F\u521D\u4E2D\u751F\u4E66\u5305\u7537\u4E2D\u5B66\u751F2022\u65B0\u6B3E\u8D85\u5927\u5BB9\u91CF\u53CC\u80A9\u5305",
          ifnew: 45,
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/748793950/O1CN01p2vW4n1f39BrXqPFs_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
          oldPrice: 157.5,
          newPrice: 130.1,
          tag: "shcoolbag",
          cart: "\u4E66\u5305"
        },
        {
          id: 46,
          selever: "kangol\u65D7\u8230\u5E97",
          title: " KANGOL\u4E2D\u53F7\u53CC\u80A9\u5305\u5973\u5927\u5B66\u751F\u7B80\u7EA6\u767E\u642D\u8FD0\u52A8\u80CC\u5305\u9632\u6C34",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://picasso.alicdn.com/imgextra/O1CNA1Zq0BnC1ETGCuRZs48_!!3421620352-0-psf.jpg_360x360Q90.jpg_.webp",
          oldPrice: 449.1,
          newPrice: 449.1,
          tag: "shcoolbag",
          cart: "\u4E66\u5305"
        },
        {
          id: 47,
          selever: "\u5F53\u5F53\u7F51\u5B98\u65B9\u65D7\u8230\u5E97",
          title: " \u3010\u5F53\u5F53\u7F51 \u5C0F\u5609\u63A8\u8350\u3011\u4F60\u53EF\u4EE5\u751F\u6C14\u4F46\u4E0D\u8981\u8D8A\u60F3\u8D8A\u6C14 \u6E29\u67D4",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/33010900/O1CN01dDQACK1IWFEssN20W_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp",
          oldPrice: 19.9,
          newPrice: 15.5,
          tag: "shcoolbag",
          cart: "\u4E66\u5305"
        },
        {
          id: 48,
          selever: "\u51E4\u51F0\u65B0\u534E\u4E66\u5E97\u65D7\u8230\u5E97",
          title: "\u6F2B\u753B\u513F\u7AE5\u5FC3\u7406\u5B66 \u5168\u59575\u518C \u5C0F\u5B66\u751F\u4E09\u56DB\u5E74\u7EA7\u4E0A\u518C\u81F3\u516D\u5E74",
          ifnew: 67,
          remaker: "",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/747883302/O1CN01ysR8kl1aGMaRrgAYJ_!!747883302.jpg_360x360Q90.jpg_.webp",
          oldPrice: 19.8,
          newPrice: 19.8,
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          id: 49,
          selever: "\u535A\u5E93\u65D7\u8230\u5E97",
          title: " \u4E09\u4F53\u5168\u96C6\u6B63\u7248\u51713\u518C \u5218\u6148\u6B23\u79D1\u5E7B\u5C0F\u8BF4\u5168\u5957\u4F5C\u54C1\u96C6 \u96E8\u679C",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://img.alicdn.com/imgextra/i3/940910178/O1CN01zxudZl1DBZI0Sw8Iy_!!0-saturn_solar.jpg_200x200.jpg",
          oldPrice: 45.5,
          newPrice: 45.5,
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          id: 50,
          selever: "\u6728\u5B50\u7B80\u56FE\u4E66\u4E13\u8425\u5E97\u5C71",
          title: " \u540D\u5BB6\u83B7\u5956\u7ED8\u672C3\u20136\u5C81 4-5\u5C81\u513F\u7AE5\u7ED8\u672C3\u4E006\u5E7C\u513F\u7ED8\u672C\u9605\u8BFB",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://picasso.alicdn.com/imgextra/O1CNA18S6J2b1CP1JBwkKHY_!!101450072-0-psf.jpg_360x360Q90.jpg_.webp",
          oldPrice: 23.8,
          newPrice: 23.8,
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          id: 51,
          selever: "\u90BA\u6C34\u6731\u534E\u56FE\u4E66\u4E13\u8425",
          title: "\u3010\u73B0\u8D27\u901F\u53D1\u3011\u6613\u7ECF\u5F88\u5BB9\u6613\u771F\u7684\u66FE\u4ED5\u5F3A \u6B63\u7248\u6613\u7ECF\u771F\u7684\u5F88",
          ifnew: 89,
          remaker: "",
          imglink: "https://img.alicdn.com/imgextra/i4/108962136/O1CN01Dgjkgz1ReKfj6QIII_!!0-saturn_solar.jpg_200x200.jpg",
          oldPrice: 24.5,
          newPrice: 20.2,
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          id: 52,
          selever: "\u4E50\u4E50\u8DA3\u56FE\u4E66\u4E13\u8425\u5E97\u6E56",
          title: " \u4E2D\u56FD\u5F53\u4EE3\u83B7\u5956\u513F\u7AE5\u6587\u5B66\u516810\u518C\u4E00\u5E74\u7EA7\u9605\u8BFB\u8BFE\u5916\u4E66\u5FC5\u8BFB",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://img.alicdn.com/imgextra/i3/15940794/O1CN01fAPDho1Hjh8qZ4J9p_!!0-saturn_solar.jpg_468x468q75.jpg_.webp",
          oldPrice: 59,
          newPrice: 52,
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          id: 53,
          selever: "\u7855\u535A\u56FE\u4E66\u4E13\u8425\u5E97",
          title: "\u7EBF\u88C5\u6B63\u7248\u5982\u679C\u5386\u53F2\u662F\u4E00\u7FA4\u55B51-10\u5168\u595710\u518C\u5B8B\u8FBD\u91D1\u590F\u7BC7",
          ifnew: 97,
          remaker: "",
          imglink: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/1049653664/O1CN01M9HgWZ1cw9nCdTtgZ_!!1049653664-0-lubanu-s.jpg_360x360Q90.jpg_.webp",
          oldPrice: 182,
          newPrice: 120,
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          id: 54,
          selever: "\u58A8\u9999\u5929\u4E0B\u56FE\u4E66\u4E13\u8425\u5E97",
          title: " \u7EBD\u4F2F\u745E\u56FD\u9645\u513F\u7AE5\u6587\u5B66\u91D1\u5956\u5C0F\u8BF4\u7CFB\u5217\u5168\u595712\u518C\u4E2D\u5C0F\u5B66\u751F",
          ifnew: 76,
          remaker: " ",
          imglink: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2200607228172/O1CN01NFu7Fa2AEpODv3zMm_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
          oldPrice: 74,
          newPrice: 60,
          tag: "book",
          cart: "\u4E66\u672C"
        },
        {
          id: 55,
          selever: "\u679C\u9EA6\u5B98\u65B9\u65D7\u8230\u5E97",
          title: "\u5C0F\u5609\u63A8\u8350\u5C0F\u738B\u5B50\u7ACB\u4F53\u4E66\u73CD\u85CF\u7248 \u5C0F\u738B\u5B50\u7684\u5947\u60F3\u4E16\u754C 3D",
          ifnew: "\u5168",
          remaker: "",
          imglink: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextrahttps://img.alicdn.com/imgextra/i2/3944105410/O1CN01vretIz1pppUFDYmv3_!!3944105410-0-alimamacc.jpg_360x360Q90.jpg_.webp",
          oldPrice: 169,
          newPrice: 169,
          tag: "book",
          cart: "\u4E66\u672C"
        }
      ]
    };
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["custom-prefix"]: "custom-icon",
      type: "top",
      size: "35"
    }),
    b: $data.ifshow ? 1 : "",
    c: common_vendor.o((...args) => $options.totop && $options.totop(...args)),
    d: common_vendor.f($data.resarr, (data, index, i0) => {
      return {
        a: data.imglink,
        b: common_vendor.t(data.ifnew),
        c: common_vendor.n(data.ifnew == "\u5168" ? "style1" : data.ifnew > 80 ? "style2" : data.ifnew > 70 ? "style3" : data.ifnew > 50 ? "style4" : "style5"),
        d: common_vendor.t(data.title),
        e: common_vendor.t(data.newPrice),
        f: common_vendor.t(data.oldPrice),
        g: common_vendor.o(($event) => $options.navi_deteial(index)),
        h: index
      };
    }),
    e: common_vendor.s($data.elementstyle),
    f: common_vendor.p({
      type: "spinner-cycle",
      color: "#666",
      size: "25"
    }),
    g: $data.scrolltop,
    h: common_vendor.o(($event) => $options.scroll_index($event))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-39fc082c"], ["__file", "C:/Users/LENOVO/Desktop/\u6613\u7269/\u6613\u7269/pages/home/components/home_content/G1_book.vue"]]);
wx.createComponent(Component);
