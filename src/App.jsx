import { useState,useEffect } from 'react'
import Description from './components/Description/Description'
import './App.css'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

const localTag = 'dz_react_1'

function App() {
  //const [totalFeedback,settotalFeedback] = useState( 0 )
  const [stateData,setStateData] = useState({ good: 0, neutral: 0,  bad: 0  })

  const updateFeedback = (p) =>{

    if (p==='good')  {setStateData ({... stateData, good : stateData.good +1}) } 
    if (p==='neutral')   {setStateData({... stateData, neutral : stateData.neutral +1})} 
    if (p==='bad')   {setStateData({... stateData, bad : stateData.bad +1})} 
    if (p==='reset') {setStateData({ good: 0, neutral: 0,  bad: 0  } )} 
 
  }

  useEffect(()=>{
    let s = localStorage.getItem(localTag)
    if(s){
      let data = JSON.parse(s)
      setStateData( data )  
    }
  },[])

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
