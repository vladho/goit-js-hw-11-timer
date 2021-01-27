const daysRef = document.querySelector('[data-value="days"]')
const hoursRef = document.querySelector('[data-value="hours"]')
const minsRef = document.querySelector('[data-value="mins"]')
const secsRef = document.querySelector('[data-value="secs"]')

const nextWeek = 7 * 60 * 60 * 24 * 1000
const startTime = Date.now() + nextWeek

const countDown = setInterval(() => {
  const currentTime = Date.now()
  const deltaTime = startTime - currentTime

  countDownTime(deltaTime)
}, 1000)

const countDownTime = (time) => {
  if (time < 0) {
    daysRef.textContent = 0
    hoursRef.textContent = 0
    minsRef.textContent = 0
    secsRef.textContent = 0
  } else {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)))
    daysRef.textContent = `${days}`
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    hoursRef.textContent = `${hours}`
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
    minsRef.textContent = `${mins}`
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000))
    secsRef.textContent = `${secs}`
  }
}

const pad = (value) => String(value).padStart(2, "0")
