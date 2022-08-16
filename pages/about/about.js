// pages/about/about.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selTheme: app.globalData.selectTheme,
    otherApp: [{
      name: '小韩百宝箱',
      key: 'box',
      appId: 'wxfab92bac1244f163',
      path: 'pages/home/index'
    }, {
      name: 'Cool Card',
      key: 'card',
      appId: 'wxd9d165e31179567a',
      path: 'pages/index/index'
    }, {
      name: '精品头像库',
      key: 'touxiang',
      appId: 'wxfab92bac1244f163',
      path: 'pages/touxiang/index'
    }, {
      name: '舔狗日记',
      key: 'tiangou',
      appId: 'wxfab92bac1244f163',
      path: 'pages/tiangou/index'
    }],
    autherArr: [{
      name: 'Han',
      avatar: 'han'
    }, {
      name: '啊烨',
      avatar: 'aye'
    }, {
      name: '张小虎',
      avatar: 'zhangyuhu'
    }],
    gongxianArr: [{
      name: '建建',
      avatar: 'lvjian'
    }, {
      name: '凡凡',
      avatar: 'fanfan'
    }, {
      name: '虎虎',
      avatar: 'huhu'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  goAutherApp({
    currentTarget: {
      dataset: {
        itmdata
      }
    }
  }) {
    const {
      appId,
      path
    } = itmdata
    wx.navigateToMiniProgram({
      appId,
      path
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      selTheme: app.selectTheme()
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})