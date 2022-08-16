// components/1.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pageKey: {
      type: String,
      value: 0
    }
  },
  // 声明周期函数
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      this.setData({
        selTheme: app.selectTheme()
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    selTheme: app.globalData.selectTheme,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goTabPage({
      currentTarget: {
        dataset: {
          pagekey
        }
      }
    }) {
      if (pagekey == this.data.pageKey) return 0;
      wx.reLaunch({
        url: `/pages/${pagekey}/${pagekey}`
      })
    }
  }
})