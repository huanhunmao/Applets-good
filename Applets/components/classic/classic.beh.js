// Behavior基本和Components用法一样
// 里面可放 properties data methods attached生命周期函数
// 将结果给一个变量   并导出使用
var classicBeh = Behavior({
  properties: {
    img: String,
    content: String,
    // hidden : Boolean
  },
  attached: function () {},
  data: {},
  methods: {},
});

export { classicBeh };
