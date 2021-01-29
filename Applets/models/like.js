import { HTTP } from "../util/http.js";

class LikeModel extends HTTP {
  // 3个参数 状态behavior artID 类型type因为是关键字所以使用 category
  like(behavior, artID, category) {
    // url 是变化的
    var url = behavior === "like" ? "like" : "like/cancel";
    this.request({
      url: url,
      //因开发文档中使用的是 POST请求 默认设置的是GET请求
      method: "POST",
      data: {
        art_id: artID,
        type: category,
      },
    });
  }

  getClassicLikeStatus(artID, category, sCallback) {
    this.request({
      url: "classic/" + category + "/" + artID + "/favor",
      success: sCallback,
    });
  }
}

export { LikeModel };
