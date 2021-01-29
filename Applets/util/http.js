// 导入 config.js   可以重命名 {config as config1} 下面也使用config1
import { config } from "../config.js";

//定义错误码
var tips = {
  1: "抱歉出现了错误",
  1005: "appkey无效，请重新申请",
  3000: "期刊不存在",
};
//使用类
class HTTP {
  request(params) {
    // params里面包含url,data,method
    if (!params.method) {
      params.method = "GET";
    }
    wx.request({
      // 完整url 两部分 加起来的
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        "content-type": "application/json",
        appkey: config.appkey,
      },
      //回调函数  2xx 4xx都放在 success中
      success: (res) => {
        //获取状态码
        var code = res.statusCode.toString();
        // console.log(code); // 200
        // es6 startWith endWith 开始字符和结束字符
        if (code.startsWith("2")) {
          //调用params下面的success函数 并将res传递进来就可
          // 当然我们只需要data 所以传递 res.data
          params.success && params.success(res.data);
        } else {
          //服务器异常
          //需要先定义 error_code
          var error_code = res.data.error_code;
          // 调用 _show_error方法
          this._show_error(error_code);
        }
      },
      fail: (err) => {
        //api调用失败
        //比如断网会出现 这个可以简化处理一下
        this._show_error(1);
      },
    });
  }
  //定义错误处理函数
  _show_error(error_code) {
    // 给个默认值
    if (!error_code) {
      error_code = 1;
    }
    wx.showToast({
      title: tips[error_code],
      icon: "none",
      duration: 2000,
    });
  }
}

export { HTTP };
