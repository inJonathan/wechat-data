var app = getApp();
Page({
    data: {
        selected: [],
        delFruits: []
    },
    onLoad: function (option) {
        // 通过onLoad方法的一个参数接收上一个页面传过来的值
        let selected = option.selected.split(','); // 将传过来的字符串换成数组
        this.setData({
            selected: selected
        });
    },
    onTapDel(event) {
        // 删除水果
        let selected = this.data.selected;
        let index = event.currentTarget.dataset.index;


        selected.splice(index, 1);
        this.setData({
            selected: selected
        });
    },
    onUnload: function () {
        if (this.data.selected.length != 0) {
            app.globalData.g_newFruits = this.data.selected; // 通知全局变量被删除的水果
        } else {
            app.globalData.g_newFruits = ['null']
        }
    }
})