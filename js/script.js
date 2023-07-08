"use strict"

class Stopwatch {
  constructor() {
    this.totalMilliseconds = 0
    this.intervalId = null
    this.running = false
  }

  start() {
    if (!this.running) {
      this.intervalId = setInterval(() => {
        this.totalMilliseconds += 10
        this.updateClock()
      }, 10)
      this.running = true
    }
  }

  stop() {
    if (this.running) {
      clearInterval(this.intervalId)
      this.intervalId = null
      this.running = false
    }
  }
  reset() {
    clearInterval(this.intervalId)
    this.totalMilliseconds = 0
    this.updateClock()
  }

  updateClock() {
    const seconds = ("0" + Math.floor(this.totalMilliseconds / 1000)).slice(-2)
    const milliseconds = ("0" + (this.totalMilliseconds % 1000) / 10).slice(-2)
    document.querySelector(".stopwatch__clock").textContent =
      seconds + ":" + milliseconds
  }

  render() {
    const startButton = document.querySelector(".start-button")
    startButton.addEventListener("click", () => {
      this.start()
    })

    const stopButton = document.querySelector(".stop-button")
    stopButton.addEventListener("click", () => {
      this.stop()
    })

    const resetButton = document.querySelector(".reset-button")
    resetButton.addEventListener("click", () => {
      this.reset()
    })
  }
}

const s = new Stopwatch()
s.render()
