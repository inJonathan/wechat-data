var app = getApp();
Page({
  data: {
    fruits: [
      { value: '西瓜', checked: 1 },
      { value: '香蕉', checked: 1 },
      { value: '苹果', checked: 0 },
      { value: '梨子', checked: 0 },
      { value: '猕猴桃', checked: 0 },
      { value: '哈密瓜', checked: 0 },
      { value: '草莓', checked: 0 },
    ],
    selected: []
  },
  checkboxChange(e) {
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    let sel_fruit = e.detail.value; // 拿到选中的水果
    // let new_fruits = this.updateChecked(sel_fruit);
    this.setData({
      selected: sel_fruit
    });
  },
  updateChecked(arr) { // 传入选中的水果，更新checked
    let fruits = this.data.fruits;
    for (let i = 0; i < fruits.length; i++) {
      fruits[i].checked = 0; // 先清空所有checked
      arr.forEach((j) => {
        if (fruits[i].value === j) {

          fruits[i].checked = 1;
        }
      });
    }
    return fruits;
  },
  updateSelected(arr) { // 传入新的fruits数组，更新selected数据
    let selected = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].checked === 1) {
        selected.push(arr[i].value);
      }
    }
    return selected;
  },
  onTapEdit(event) {
    // 带上选中的水果数据跳转，传入下一个页面
    wx.navigateTo({
      url: "../edit/edit?selected=" + event.currentTarget.dataset.selected
    });
  },
  onReady: function () {

  },
  onLoad(options) {
    // 初始化选中的水果
    let fruits = this.data.fruits;
    let checked = [];
    for (let j = 0; j < fruits.length; j++) {
      if (fruits[j].checked) {
        checked.push(fruits[j].value);
      }
    }
    this.setData({
      selected: checked
    });
  },
  onShow: function () {
    // 子页面修改后重置数据
    let g_newFruits = app.globalData.g_newFruits;

    if (g_newFruits.length !== 0 && g_newFruits[0] !== 'null') { // 如果存在被删除的水果就更新
      let new_fruits = this.updateChecked(g_newFruits);
      this.setData({
        fruits: new_fruits,
        selected: this.updateSelected(new_fruits)
      });
    } else if (g_newFruits[0] === 'null') {
      let new_fruits = this.updateChecked([]);
      this.setData({
        fruits: new_fruits,
        selected: this.updateSelected(new_fruits)
      });
    }
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})