// pages/classic/classic.js
import { ClassicModel } from "../../models/classic.js";
// 导入 LikeModel
import { LikeModel } from "../../models/like.js";
import { classicBeh } from "../../components/classic/classic.beh.js";
var likeModel = new LikeModel();
var classicModel = new ClassicModel();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    latest: true,
    first: false,
    likeCount: 0,
    likeStatus: false,
  },
  onLike: function (event) {
    // console.log(event);
    // 拿到 喜欢还是不喜欢的数据
    var behavior = event.detail.behavior;

    // 使用 likeModel
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type);
  },

  onNext: function (event) {
    this._updataClassic("next");
  },
  onPrevious: function (event) {
    this._updataClassic("previous");
  },

  _updataClassic: function (nextOrPrevious) {
    var index = this.data.classic.index;
    classicModel.getClassic(index, nextOrPrevious, (res) => {
      // console.log(res);

      this._getLikeStatus(res.id, res.type);
      // 更新数据
      this.setData({
        classic: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index),
      });
    });
  },

  _getLikeStatus: function (artID, category) {
    // getClassicLikeStatus方法 调用的是 Models下的like.js
    // 导出模块为   likeModel
    likeModel.getClassicLikeStatus(artID, category, (res) => {
      //更新数据
      this.setData({
        likeCount: res.fav_nums,
        likeStatus: res.like_status,
      });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res) => {
      // console.log(res);
      // this._getLikeStatus(res.id, res.type);
      //数据绑定  更新
      this.setData({
        classic: res,
        likeCount: res.fav_nums,
        likeStatus: res.like_status,
      });
      // console.log(this.data);
      // 加载 onLoad会有一个 latestClassic 对应 latestIndex
      // 加载 onPrevious会有一个 currentClassic对应 currentIndex
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
