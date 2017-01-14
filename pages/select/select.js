// pages/select/select.js
Page({
  data: {
    fruits: [
      { value: '西瓜', checked: 'true' },
      { value: '香蕉', checked: 'true' },
      { value: '苹果' },
      { value: '梨子' },
      { value: '猕猴桃' },
      { value: '哈密瓜' },
      { value: '草莓' },
    ],
    selected: []
  },
  checkboxChange: function (e) {
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    let fruits = this.data.fruits;
    let sel_fruits = e.detail.value; // 拿到选中的水果
    let arr = [];
    sel_fruits.forEach(function (i) {
      arr.push(fruits[i].value);
    });
    this.setData({
      selected: arr
    });
  },
  onLoad: function (options) {
    // 初始化选中的水果
    let fruits = this.data.fruits;
    let arr = [];
    for (let i = 0; i < fruits.length; i++) {
      if (fruits[i].checked) {
        arr.push(fruits[i].value);
        // 通知data更新，DOM层自动重新渲染
        this.setData({
          selected: arr
        });
      }
    }
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})