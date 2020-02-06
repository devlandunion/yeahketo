import React, { useState, useEffect } from "react"

const Timer = ({ initialTimeSeconds }) => {
  const [duration, setDuration] = useState(initialTimeSeconds)
  const [time, setTime] = useState("05:00")

  useEffect(() => {
    let timer = duration,
      minutes,
      seconds
    const timerInterval = setInterval(function() {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10)

      minutes = minutes < 10 ? "0" + minutes : minutes
      seconds = seconds < 10 ? "0" + seconds : seconds

      setTime(minutes + ":" + seconds)

      if (--timer < 0) {
        timer = duration
      }
    }, 1000)

    if (duration == 0) {
      clearTimeout(timerInterval)
    }

    return () => clearTimeout(timerInterval)
  }, [duration, setDuration])

  return <>{time}</>
}

export default Timer
