const request = (_url, options) => {
  const url = `https://api.vvhan.com/api/${_url}`
  return new Promise((resolve) => {
    options.isLoading && wx.showLoading({
      title: '正在加载',
    })
    wx.request({
      url,
      method: options.method,
      data: options.data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      success(res) {
        resolve(res.data)
        options.isLoading && wx.hideLoading();
      },
      fail(error) {
        options.isLoading && wx.hideLoading();
        wx.showToast({
          icon: 'none',
          title: '请求失败',
          duration: 1400
        });
      }
    })
  })
}

const get = (url, options = {}, isLoading = true) => {
  return request(url, {
    method: 'GET',
    data: options,
    isLoading
  })
}

const post = (url, options = {}, isLoading = true) => {
  return request(url, {
    method: 'POST',
    data: options,
    isLoading
  })
}
module.exports = {
  get,
  post,
}