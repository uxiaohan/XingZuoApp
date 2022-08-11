import {
  get
} from '../../utils/request'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: 3,
    xzList: [{
        "key": "aries",
        "name": "白羊座",
        "time": "3.21-4.19",
        "color": "#81aa64"
      },
      {
        "key": "taurus",
        "name": "金牛座",
        "time": "4.20-5.20",
        "color": "#e4b756"
      },
      {
        "key": "gemini",
        "name": "双子座",
        "time": "5.21-6.21",
        "color": "#8661ac"
      },
      {
        "key": "cancer",
        "name": "巨蟹座",
        "time": "6.22-7.22",
        "color": "#daa673"
      },
      {
        "key": "leo",
        "name": "狮子座",
        "time": "7.23-8.22",
        "color": "#fa9f82"
      },
      {
        "key": "virgo",
        "name": "处女座",
        "time": "8.23-9.22",
        "color": "#f18cbf"
      },
      {
        "key": "libra",
        "name": "天秤座",
        "time": "9.23-10.23",
        "color": "#d17a78"
      },
      {
        "key": "scorpio",
        "name": "天蝎座",
        "time": "10.24-11.22",
        "color": "#7286ce"
      },
      {
        "key": "sagittarius",
        "name": "射手座",
        "time": "11.23-12.21",
        "color": "#4d83cb"
      },
      {
        "key": "capricorn",
        "name": "摩羯座",
        "time": "12.22-1.19",
        "color": "#987b6a"
      },
      {
        "key": "aquarius",
        "name": "水瓶座",
        "time": "1.20-2.18",
        "color": "#85c4d4"
      },
      {
        "key": "pisces",
        "name": "双鱼座",
        "time": "2.19-3.20",
        "color": "#7cbd9e"
      }
    ],
    keyItem: {},
    todayKey: false,
    nextdayKey: false,
    weekKey: false,
    monthKey: false,
    yearKey: false,
    todayObj: {},
    nextdayObj: {},
    weekObj: {},
    monthObj: {},
    yearObj: {}
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
      title: `${keyItem.name}运势详情`,
    })
    this.getData('today')
  },
  // Tab切换事件
  tabChan(e) {
    this.getData(e.detail.name)
  },
  async getData(e) {
    if (this.data[`${e}Key`]) return 0;
    const res = await get(`type=${this.data.keyItem.key}&time=${e}`);
    res.success && this.setData({
      [`${e}Key`]: true,
      [`${e}Obj`]: res.data
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
    分享页面
  }
})