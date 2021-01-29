//1、引入 HTTP
import { HTTP } from "../util/http.js";
// 2、使用继承
class ClassicModel extends HTTP {
  //3、获取最新的期刊
  getLatest(sCallback) {
    //4、将生命周期onLoad代码拿过来  因为继承HTTP 不用实例化http
    // 5、直接使用 this.request()
    this.request({
      url: "classic/latest",
      //方法不需要写 因为已经有默认值 GET
      success: (res) => {
        sCallback(res);
        this._setLatestIndex(res.index);

        //从res中拿到 index 从而得到key
        var key = this._getKey(res.index);
        // 并写入缓存中
        wx.setStorageSync(key, res);
      },
    });
  }
  //3、获取上一期内容
  getClassic(index, nextOrPrevious, sCallback) {
    //4、将生命周期onLoad代码拿过来  因为继承HTTP 不用实例化http
    // 5、直接使用 this.request()
    var key =
      nextOrPrevious == "next"
        ? this._getKey(index + 1)
        : this._getKey(index - 1);
    var classic = wx.getStorageSync(key);
    if (!classic) {
      this.request({
        // url: "classic/" + index + "/" + nextOrPrevious,
        url: `classic/${index}/${nextOrPrevious}`,
        //方法不需要写 因为已经有默认值 GET
        success: (res) => {
          wx.setStorageSync(this._getKey(res.index), res);
          sCallback(res);
        },
      });
    } else {
      //缓存中找到  直接调用回调函数
      sCallback(classic);
    }
  }

  // 判断期刊是不是第一个
  isFirst(index) {
    return index === 1 ? true : false;
  }
  // 判断期刊是不是最新一期
  isLatest(index) {
    var latestIndex = this._getLatestIndex();
    return latestIndex === index ? true : false;
  }

  _setLatestIndex(index) {
    // 将 latest index存在 缓存中
    wx.setStorageSync("latest", index);
  }

  _getLatestIndex() {
    //通过 传入 latest 拿到 对应的值 index
    var index = wx.getStorageSync("latest");
    return index;
  }

  _getKey(index) {
    var key = "classic-" + index;
    return key;
  }
}

export { ClassicModel };
