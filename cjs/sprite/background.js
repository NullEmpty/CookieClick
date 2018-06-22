import Sprite from './sprite.js'

const BG_IMG_SRC = "cimages/bgBlue.jpg"
const BG_WIDTH   = 512
const BG_HEIGHT  = 512

export default class Background extends Sprite{
  constructor(ctx) {
    super(BG_IMG_SRC, BG_WIDTH, BG_HEIGHT)
    this.render(ctx)
  }

  update() {

  }

  render(ctx){
    ctx.drawImage(
      this.img,
      0,
      0,
      this.width,
      this.height
    )
    ctx.drawImage(
      this.img,
      0,
      0,
      this.width,
      this.height,
      0,
      this.height,
      this.width,
      this.height

    )
  }
  
}