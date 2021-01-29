// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      //当index改变 就会触发 observer函数
      observer: function (newVal, oldVal, changedPath) {
        var val = newVal < 10 ? "0" + newVal : newVal;
        // console.log(val);
        this.setData({
          _index: val,
        });
      },
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ],
    year: 0,
    mouth: "",
    _index: "",
  },

  //组件生命周期函数
  // 在组件实例进入页面节点树时执行
  attached: function () {
    var date = new Date();
    // 获得当前年份和月份
    var year = date.getFullYear();
    var month = date.getMonth();
    // 数据绑定
    this.setData({
      year: year,
      month: this.data.months[month],
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {},
});
