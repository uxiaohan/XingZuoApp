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
      wx.reLaunch({
        url: `/pages/${pagekey}/${pagekey}`
      })
    }
  }
})