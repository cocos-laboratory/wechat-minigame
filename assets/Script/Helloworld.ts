import wechat from './wechat'

const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

  @property(cc.Sprite)
  display: cc.Sprite = null

  tex: cc.Texture2D = new cc.Texture2D()

  private _isShow: boolean = false

  onClick() {
    this._isShow = !this._isShow

    // 发消息给子域
    wx.postMessage({
      message: this._isShow ? 'Show' : 'Hide'
    })
  }

  setUserCloudStorage() {
    wx.setUserCloudStorage({
      KVDataList: [{
        score: 1000
      }],
      success(res) {
        cc.log('wx.setUserCloudStorage success', res)
      },
      fail(e) {
        cc.log('wx.setUserCloudStorage fail', e)
      }
    })
  }

  start() {
    wx.setKeepScreenOn({
      keepScreenOn: true
    })

    wx.login({
      success: function () {
        wx.getUserInfo({
          success(res) {
            cc.log(res)
          }
        })
      }
    })

    wx.onShareAppMessage(() => {
      return {
        title: '转发标题'
      }
    })
  }

  _updateSubDomainCanvas() {
    if (!this.tex) {
      return
    }

    this.tex.initWithElement(window['sharedCanvas'])
    this.tex.handleLoadedTexture()
    this.display.spriteFrame = new cc.SpriteFrame(this.tex)
  }

  update() {
    this._updateSubDomainCanvas();
  }

  share() {
    wechat.shareApp()
  }
}
