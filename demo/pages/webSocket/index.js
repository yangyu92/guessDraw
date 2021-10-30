// demo/pages/webSocket/index.js
var wxst;

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.socketListener();
    this.connectionSoket();
  },

  socketListener() {
    wx.onSocketOpen((res) => {// websocket打开
      console.log('监听到 WebSocket 连接已打开');
      console.log(res);
    })
    wx.onSocketError((err) => {//连接失败
      console.log('websocket连接失败', err);
      wx.showToast({
        title: 'websocket连接失败',
        icon: 'none',
        duration: 2000,
        mask: false
      })
    })
    wx.onSocketMessage((res) => {//接收返回值
      console.log(res);
      // var data = JSON.parse(res.data)
      // console.log(data);
      console.log("********* 语音识别结果 ***********");
      // wxst.close();
      console.log("********* 语音识别结果结束 ***********");
    })
    wx.onSocketClose((res) => {//WebSocket连接已关闭！
      console.log('WebSocket连接已关闭！')
    })
  },

  connectionSoket() {
    wxst = wx.connectSocket({ // 开启websocket连接
      url: 'ws://127.0.0.1:8180/websocket_service/yangyu',
      method: 'GET',
      success: function (res) {
        console.log(res);
      }
    });
  },

})