// pages/detail/detail.js
Page({
  data:{
    id: 0,
    movieDetail: {}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.id)
      var that = this
      that.setData({
        id: options.id
      })
    var that = this;
      wx.showLoading({
        title: "加载中...",
        mask: true,
        success: function () {
          that.getDetail()
        }
      })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  getDetail: function () {
    var that = this
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/'+that.data.id, 
      // url: 'https://tangcaiye001.applinzi.com/top250.php?count=' + that.data.movCount, 
      // url: 'http://localhost:8081/test',
      data: {},
      header: {
          'content-type': 'json'
      },
      success: function(res) {
        wx.hideLoading();
        that.setData({
          movieDetail: res.data
        })
        console.log(that.data.movieDetail);
      }
    })
  }
})