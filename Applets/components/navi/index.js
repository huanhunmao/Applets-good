// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 标题
    title: String,
    // 第一期和最后一期 左右箭头状态不一样
    first: Boolean,
    latest: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: "images/triangle.dis@left.png",
    leftSrc: "images/triangle@left.png",
    disRightSrc: "images/triangle.dis@right.png",
    rightSrc: "images/triangle@right.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function (event) {
      // 如果不是最新一期 左箭头有效
      if (!this.properties.latest) {
        this.triggerEvent("left", {}, {});
      }
    },
    // 如果不是第一期 右箭头有效
    onRight: function (event) {
      if (!this.properties.first) {
        this.triggerEvent("right", {}, {});
      }
    },
  },
});
