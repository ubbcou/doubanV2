var text = null;
Page({
  data: {
    movies: {}
  },
  sendFn: function (e) {
    text = e.detail.value
  },
  getMovies: function () {
    var that = this
    wx.showLoading({
      title: "加载中...",
      mask: true,
      success: function () {
        wx.request({
          // /v2/movie/search?q=text
          url: 'https://api.douban.com/v2/movie/search', 
          data: {
            q: text
          },
          header: {
              'content-type': 'json'
          },
          success: function(res) {
            wx.hideLoading();
            if(res.data.total == 0) {
              wx.showToast({
                title: '无结果'
              })
            }
            that.setData({
              movies: res.data
            })
            console.log(res.data)
          }
        })
      }
    })
  }
})
