import React from 'react'
import { useState } from 'react'

const App = () => {

  const [principle,setPrinciple] = useState()
  const [rate,setRate] = useState()
  const [time,setTime] = useState()
  const [frequency,setfrequency] = useState()
  const [message, setMessage] = useState()


  //logic

  const calculate = () =>{
      const r = rate / 100;
      const amount = principle*Math.pow(1+r/frequency, frequency*time);
      setMessage(amount.toFixed(2))
  }
  return (
    <div className='bg-blue-200 h-[100vh] flex justify-center items-center'>
      <div className='bg-white flex flex-col w-[30%] p-8 rounded-xl shadow-lg'>

        <label className='mt-3'>principle amount</label>
        <input className='pl-2 rounded border-2 border-black' type="number" onChange={(e)=>setPrinciple(e.target.value)} value={principle}/>

        <label className='mt-3'>rate(%)</label>
        <input className='pl-2 rounded border-2 border-black' type="number" onChange={(e)=>setRate(e.target.value)} value={rate}/>

        <label className='mt-3'>time(years)</label>
        <input className='pl-2 rounded border-2 border-black' type="number" onChange={(e)=>setTime(e.target.value)} value={time}/>

        <label className='mt-3'>frequency</label>
        <input className='pl-2 rounded border-2 border-black' type="number" onChange={(e)=>setfrequency(e.target.value)} value={frequency}/>

        <button className='border-2 border-black mt-5 rounded w-30 ml-35 cursor-pointer bg-slate-700 text-white' onClick={calculate}>calculate</button>
    
        <p className='font-bold bg-green-200 rounded p-2 mt-5'>{message}</p>
      </div>
    </div>
  )
}

export default App
