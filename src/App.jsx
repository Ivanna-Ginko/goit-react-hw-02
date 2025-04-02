import { useState,useEffect } from 'react'
import Description from './components/Description/Description'
import './App.css'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

const localTag = 'dz_react_2'

function App() {
  
  const [stateData,setStateData] = useState(() => {
    let data = localStorage.getItem(localTag)
      
    if (data) return JSON.parse(data);
    
      return {good: 0, neutral: 0, bad: 0,};  
  }) 

  const updateFeedback = (p) =>{
   
    if (p==='reset') {setStateData({ good: 0, neutral: 0,  bad: 0  } )}
    else { setStateData ({... stateData, [p] : stateData[p] +1})
    }
  }

  
    useEffect (() => {
    localStorage.setItem(localTag, JSON.stringify(stateData))
  },[stateData])

  let totalFeedback = stateData.good+stateData.bad+stateData.neutral
  let goodPC = 0
  if (totalFeedback >0 )  goodPC = Math.round((stateData.good / totalFeedback) * 100)


  return (
    <>
      <Description />
      <Options funClick = {updateFeedback} totalFeedback={totalFeedback}/>
      {totalFeedback>0 && <Feedback data={stateData} totalFeedback={totalFeedback} goodPC={goodPC}/>}
      {totalFeedback ===0 && <Notification /> }
    </>
  )
}

export default App
