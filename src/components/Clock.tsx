import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

function Clock() {
  const [time, setTime] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = String(time.getHours()).padStart(2, '0')
  const minutes = String(time.getMinutes()).padStart(2, '0')
  const seconds = String(time.getSeconds()).padStart(2, '0')

  return (
    <div className="flex gap-px justify-center items-center p-5">
      <TimeUnit value={hours} />
      <span>:</span>
      <TimeUnit value={minutes} />
      <span>:</span>
      <TimeUnit value={seconds} />
    </div>
  )
}

interface TimeUnitProps {
  value: string
}

function TimeUnit({ value }: TimeUnitProps) {
  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <Digit digit={value[0]} />
      <Digit digit={value[1]} />
    </div>
  )
}

interface DigitProps {
  digit: string
}

function Digit({ digit }: DigitProps) {
  return (
    <div className="w-4 h-15 overflow-hidden relative flex  justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.div
          className="absolute"
          key={digit}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            duration: 0.2,
            ease: 'easeOut'
          }}
        >
          {digit}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Clock
