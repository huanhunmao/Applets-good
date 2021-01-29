// components/classic/movie/music/index.js
import { classicBeh } from "../classic.beh.js";
Component({
  /**
   * 组件的属性列表
   */
  // behaviors 里面有两个属性img  content
  behaviors: [classicBeh],
  properties: {
    // img:Number
    // 播放音乐的地址
    src: String,
    hidden: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 暂停和播放 对应两张图片
    pauseSrc: "images/player/@pause.png",
    playSrc: "images/player@play.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
