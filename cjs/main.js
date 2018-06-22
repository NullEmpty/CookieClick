import Background from './sprite/background.js'
import BitCookie from './sprite/bigCookie.js'
import ScorePanel from './sprite/scorePanel.js'
import GlobalData from './globalData.js'

// let canvas = wx.createCanvas()
let ctx = canvas.getContext("2d");
let globalData = new GlobalData()

export default class Main {
  constructor(){
    this.bg = new Background(ctx)
    this.bigCookie = new BitCookie(ctx)
    this.bigCookie.setOnClickListener(this.onCookieClick)
    this.scorePanel = new ScorePanel()

    this.bindLoop = this.loop.bind(this)

    // 清除上一局的动画
    window.cancelAnimationFrame(this.aniId);

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }

  update() {

  }

  render() {
    this.bg.render(ctx)
    this.bigCookie.render(ctx)
    this.scorePanel.render(ctx)
  }

  // 实现游戏帧循环
  loop() {
    this.frame++

    this.update()
    this.render()

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }

  onCookieClick() {
    var addScore = globalData.getLevel()
     wx.showToast({
          title: '+' + addScore,
          image: '/cimages/perfectCookie.png'
    })
     globalData.addScore(addScore)

  }
}



function draw() {  
  ctx.lineTo(10,10)
  ctx.fillStyle = "red"
  ctx.fillRect(0,0,100,100)
}