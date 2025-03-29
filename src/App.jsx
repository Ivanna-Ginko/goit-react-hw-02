import { useState,useEffect } from 'react'
import Description from './components/Description/Description'
import './App.css'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'

const localTag = 'dz_react_1'

function App() {
  const [totalFeedback,settotalFeedback] = useState( 0 )
  const [stateData,setStateData] = useState({ good: 0, neutral: 0,  bad: 0  })

  const updateFeedback = (p) =>{
    let data = stateData
    if (p==='good')  {data.good +=1 } 
    if (p==='neutral')  {data.neutral +=1 } 
    if (p==='bad')  {data.bad +=1 } 
    if (p==='reset')  {
      data.good =0;
      data.neutral=0;
      data.bad=0;
     } 
    setStateData( data )  
    localStorage.setItem(localTag, JSON.stringify(data))
    settotalFeedback(data.good+data.bad+data.neutral)
  }

  useEffect(()=>{
    let s = localStorage.getItem(localTag)
    if(s){
      let data = JSON.parse(s)
      setStateData( data )  
      settotalFeedback(data.good+data.bad+data.neutral)      
    }
  },[totalFeedback])



  return (
    <>
      <Description />
      <Options funClick = {updateFeedback} totalFeedback={totalFeedback}/>
      <Feedback data={stateData} totalFeedback={totalFeedback}/>
    </>
  )
}

export default App
