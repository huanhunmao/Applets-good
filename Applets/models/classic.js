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
      },
    });
  }
}

export { ClassicModel };
