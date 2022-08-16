import {
  get
} from '../../utils/request'
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabActive: 0,
    selTheme: app.globalData.selectTheme,
    value: 3,
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
    ],
    keyItem: {},
    objValue: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const keyItem = this.data.xzList.filter(itm => itm.key == options.xzKey)[0]
    this.setData({
      keyItem
    })
    wx.setNavigationBarTitle({
      title: `生肖${keyItem.name}运势详解`,
    })
    this.getData(keyItem.key)
  },

  async getData(e) {
    const month = new Date().getMonth();
    console.log(month);
    const {
      data: objValue
    } = await get(`zodiac?type=${e}`);
    this.setData({
      objValue
    }, () => {
      this.setData({
        tabActive: month
      })
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
      title: `生肖${this.data.keyItem.name}运势详解`,
      path: `/pages/shengxiaoinfo/shengxiaoinfo?xzKey=${this.data.keyItem.key}`,
      imageUrl: `/static/images/shareBanner/shengxiao/${this.data.keyItem.key}.jpg`
    }
  },
  // 分享至朋友圈
  onShareTimeline() {
    return {
      title: `生肖${this.data.keyItem.name}运势详解`,
      query: {
        xzKey: this.data.keyItem.key
      },
      imageUrl: `/static/images/shareBanner/shengxiao/${this.data.keyItem.key}.jpg`
    }
  }
})