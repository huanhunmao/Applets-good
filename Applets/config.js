//导出
const config = {
  api_base_url: "http://bl.talelin.com/v1/",
  appkey: "9gjMVHm0DpbVg9Lq",
};

// 需要注意
// 更改 config = 2 会报错  因为const不允许修改指向的内存地址
// 更改 config.appkey 不会报错 因为修改的config下的对象属性
// config自身指向内存地址未改变

export { config };
