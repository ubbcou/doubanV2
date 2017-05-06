//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    movCount: 20,
    movieTop250: {},
    more: "加载更多"
  },
  //事件处理函数
  onLoad: function () {
    // console.log('onLoad')
    // console.log(this)
    var that = this;
    wx.showLoading({
      title: "加载中...",
      mask: true,
      success: function () {
        that.getData()
      }
    })
  },
  toDetail: function() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  getMore: function () {
    if(this.data.movCount < 100){
      this.setData({
        movCount: this.data.movCount+=20
      })
      // console.log(this.data.movCount)
      var that = this;
      wx.showLoading({
        title: "加载中...",
        mask: true,
        success: function () {
          that.getData()
        }
      })
    }else {
      this.setData({
        more: "没有更多了"
      })
    }
  },
  getData: function () {
    var that = this
    // console.log(that.data.movCount)
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250?count='+that.data.movCount, 
      // url: 'https://tangcaiye001.applinzi.com/top250.php?count=' + that.data.movCount, 
      // url: 'http://localhost:8081/test',
      data: {},
      header: {
          'content-type': 'json'
      },
      success: function(res) {
        wx.hideLoading();
        that.setData({
          movieTop250: res.data
        })
        // console.log(that.data.movieTop250);
      }
    })
  }
})
