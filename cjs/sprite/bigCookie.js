import Sprite from './sprite.js'

const ck_bg = 'cimages/perfectCookie.png'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
const ck_width = 200
const ck_height = 200
const px = (screenWidth - ck_width)/2
const py = screenWidth * 4 / 9

const __ = {
  timer : Symbol('timer')
}

export default class BigCookie extends Sprite {
  constructor(ctx) {
    super(ck_bg, ck_width, ck_height, px, py)

    this.playing = 0
    this.initEvent()
  }

  update(){

  }

  render(ctx) {
    this.drawToCanvas(ctx)
  }

  setOnClickListener(l){
    this.clickListener = l
  }

  initEvent() {
    canvas.addEventListener('touchstart', ((e)=>{
      e.preventDefault()
      let x = e.touches[0].clientX
      let y = e.touches[0].clientY
      if (this.checkIsFingerOnCokie(x, y)) {
        this.stopScaleAnim()
        this.playScaleAnim()
        this.clickListener()
      }
    }).bind(this))
  }

playScaleAnim(){
  this.playing = 1
  this[__.timer] = setInterval(
  this.anim.bind(this),
    1000 / 60)
}

stopScaleAnim() {
  this.playing = 0
  if (this[__.timer]) {
    clearInterval(this[__.timer])
  }
  this.width = ck_width
  this.height = ck_height
  this.x = (screenWidth - this.width) / 2
  this.y = py + ck_width / 2 - this.width / 2
}

  anim() {
    if (this.playing > 0) {
      this.width *= 1.03
      this.height *= 1.03
    } else if (this.playing < 0){
      this.width *= 0.97
      this.height *= 0.97
    }
    if (this.width > ck_width * 1.2) {
      this.playing = -1
    } else if (this.width <= ck_width){
      // this.playing = 1
      this.stopScaleAnim()
    }

    this.x = (screenWidth - this.width) / 2
    this.y = py + ck_width / 2 - this.width / 2

  }

  checkIsFingerOnCokie(x, y) {
    return Math.pow(x - (this.x + this.width / 2), 2) 
    + Math.pow(y - (this.y + this.width / 2), 2)
    <=Math.pow(this.width / 2, 2)
  }

}