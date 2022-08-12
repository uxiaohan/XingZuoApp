// app.js
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
  globalData: {
    userInfo: null
  }
})