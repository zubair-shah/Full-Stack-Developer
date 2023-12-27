import React, { useEffect ,  useState} from 'react'
import { BackgroundMiute, BackgroundSecond,
    HoursStroke,
    secondStroke,
    MiuteStroke
} from './images'       
function Clock() {
    const [hours , setHours] = useState('')
    const [second , setSecond] = useState('')
    const [minutes, setMinutes] = useState('')
      const [loop, setLoop] = useState()
    useEffect(() => {
         setLoop(setInterval(() => {
             let date = new Date();
          
    let getHours = date.getHours();
    let getMinutes = date.getMinutes();
             let getSeconds = date.getSeconds();
             setHours(getHours)
             setMinutes(getMinutes)
             setSecond(getSeconds)

        }, 1000))

        return function cleanup() {
            console.log('cleaning up')
            clearInterval(loop)
        }
    }, [second])
  return (
      <div className='main-clock'>
          <div className="inner-clock">
           <img src={HoursStroke}  className="hour-stroke" alt="logo" />
           <img src={MiuteStroke} className="minute-stroke" alt="logo" />
           <img src={secondStroke} className="second-stroke" alt="logo" />
          </div>

    </div>
  )
}

export default Clock