import Sprite from './sprite.js'
import GlobalData from '../globalData.js'

let globalData = new GlobalData()
let titleString = 'Kuang\'s bakery'
let titleWidth = globalData.screenWidth * 3 / 4
let titleHeight = 25
let titleX = (globalData.screenWidth - titleWidth) / 2
let titleY
let y = 45

export default class ScorePanel extends Sprite {
  constructor() {
    super('', 0, 0,0, y)
    titleY = this.y
  }

  render(ctx) {
    ctx.fillStyle = "rgba(0,0,0,0.3)"
    roundRect(ctx, titleX, titleY, titleWidth, titleHeight, 9).fill()
    ctx.font = "18px Courier New"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"        
    ctx.fillText(titleString, globalData.screenWidth / 2, titleY + (titleHeight)/2 + 5)

    ctx.fillStyle = "rgba(0,0,0,0.3)"
    ctx.fillRect(0, titleY + 35, globalData.screenWidth, 66)
        ctx.font = "24px Courier New Bold"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.fillText(globalData.getTotalScore(), globalData.screenWidth / 2, titleY + 60)
    
    ctx.fillText("cookies", globalData.screenWidth / 2, titleY + 85)

    ctx.font = "14px Courier New"
    ctx.fillText("persecond:" + globalData.getPersecond(), globalData.screenWidth / 2, titleY + 98)
  }

}

function roundRect(ctx, x, y, w, h, r) {
  if (w < 2 * r) { r = w / 2; }
  if (h < 2 * r) { r = h / 2; }
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  return ctx;
}

