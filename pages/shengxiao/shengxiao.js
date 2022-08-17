// pages/home/home.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selTheme: app.globalData.selectTheme,
    xzList: [{
        key: "shu",
        name: "鼠",
        color: "#81aa64"
      },
      {
        key: "niu",
        name: "牛",
        color: "#e4b756"
      },
      {
        key: "hu",
        name: "虎",
        color: "#8661ac"
      },
      {
        key: "tu",
        name: "兔",
        color: "#daa673"
      },
      {
        key: "long",
        name: "龙",
        color: "#fa9f82"
      },
      {
        key: "she",
        name: "蛇",
        color: "#f18cbf"
      },
      {
        key: "ma",
        name: "马",
        color: "#d17a78"
      },
      {
        key: "yang",
        name: "羊",
        color: "#7286ce"
      },
      {
        key: "hou",
        name: "猴",
        color: "#4d83cb"
      },
      {
        key: "ji",
        name: "鸡",
        color: "#987b6a"
      },
      {
        key: "gou",
        name: "狗",
        color: "#85c4d4"
      },
      {
        key: "zhu",
        name: "猪",
        color: "#7cbd9e"
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {},
  // 页面跳转
  goPage({
    currentTarget: {
      dataset: {
        itemkey
      }
    }
  }) {
    wx.navigateTo({
      url: `/pages/shengxiaoinfo/shengxiaoinfo?xzKey=${itemkey}`,
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
    return {
      title: '生肖运势丨生肖详解',
      path: '/pages/shengxiao/shengxiao',
      imageUrl: "/static/images/shareBanner/shengxiao/shengxiao.png"
    }
  },
  // 分享至朋友圈
  onShareTimeline() {
    return {
      title: "生肖运势丨生肖详解",
      query: {},
      imageUrl: "/static/images/shareBanner/shengxiao/shengxiao.png"
    }
  }
})