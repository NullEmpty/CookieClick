
let instance
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

export default class GlobalData {
  constructor(){
    if (instance) {
      return instance
    }
    instance = this

    this.init()
  }

  init() {
    this.screenWidth = screenWidth
    this.screenHeight = screenHeight
    this.level = 1
    this.totalScore = 0
    this.persecond = 0
  }

  getLevel() {
    return this.level
  }

  getTotalScore() {
    return this.totalScore
  }

  addScore(score) {
    this.totalScore += score
    if (this.totalScore >= Math.pow(5, this.level)) {
      this.level += 1;
    }
  }

  getPersecond() {
    return this.persecond
  }

}