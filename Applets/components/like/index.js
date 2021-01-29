// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      //类型 必填
      type: Boolean,
      // 默认值 选填  boolean 默认就是false
      value: false,
      // 选填
      observer: function () {},
    },
    count1: {
      type: Number,
      // 数字类型 默认值 0 可不写
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // like: false,
    // count1: 99,
    yesSrc: "images/like.png",
    noSrc: "images/like@dis.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function (event) {
      // console.log(event);
      var like = this.properties.like;
      var count1 = this.properties.count1;

      count1 = like ? count1 - 1 : count1 + 1;
      this.setData({
        count1: count1,
        like: !like,
      });

      //自定义事件 判断点赞还是取消
      var behavior = this.properties.like ? "like" : "cancel";
      // 需要激活 自定义事件  1参数 自定义事件名称  2参数 自定义属性  3参数看文档不能自己定义
      this.triggerEvent(
        "like",
        {
          behavior: behavior,
        },
        {}
      );
    },
  },
});
