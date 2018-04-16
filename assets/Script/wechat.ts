export default {
  shareApp () {
    return wx.shareAppMessage({
      title: 'share test',
      fail(e) {
        cc.log(e)
      },
      success(res) {
        cc.log(res)
      }
    })
  }
}