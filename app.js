// app.js
import {
  themes
} from '/utils/themes'
App({
  onLaunch() {
    // 展示本地存储能力
    // 微信小程序获取版本更新
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
    })
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '小韩提示',
        content: '新版来袭，速来体验！',
        success: function (res) {
          if (res.confirm) {
            updateManager.applyUpdate()
          }
        }
      })
    })
    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    });
  },
  selectTheme() {
    const _theme = themes['blue'];
    this.globalData.selectTheme = _theme
    wx.setBackgroundColor({
      backgroundColor: _theme.background,
    }), wx.setNavigationBarColor({
      backgroundColor: _theme.background,
      frontColor: _theme.titleColor,
    })
  },
  globalData: {
    userInfo: null,
    selectTheme: {
      background: '#91b9ec',
      titleColor: '#ffffff',
      imgKey: 'blue',
      headFont: '#ffffff',
      listBackground: '#e9f1fb'
    }
  }
})