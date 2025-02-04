import React, { useState } from 'react'

const App = () => {

  const [firstnumber, setFirstnumber] = useState();
  const [secondnumber, setSecondnumber] = useState();
  const [message, setMessage] = useState();
  const increment = () =>{
        let amount = (Number(firstnumber) + Number(secondnumber));
        setMessage(amount);
  }

  const decrement = () =>{
    let amount = (Number(firstnumber) - Number(secondnumber));
    setMessage(amount)
  }

  const multiplication = () =>{
    let amount = (Number(firstnumber) * Number(secondnumber));
    setMessage(amount)
  }

  const division = () =>{
    let amount = (Number(firstnumber) / Number(secondnumber));
    setMessage(amount)
  }

  return (
    <div className='h-[100vh] bg-pink-200 flex justify-center items-center'>
       <div className='bg-white flex flex-col w-[30%] p-5 rounded'>
       <label>first number</label>
        <input className=' pl-2 border-2 border-black rounded' onChange={(e)=>setFirstnumber(e.target.value)} value={firstnumber}/>
        <label>second number</label>
        <input className=' pl-2 border-2 border-black rounded' onChange={(e)=>setSecondnumber(e.target.value)} value={secondnumber}/>
        <div>
          <button className='bg-slate-200 m-2 px-5 py-2 font-bold text-xl rounded cursor-pointer hover:bg-slate-500 hover:text-white' onClick={increment}>+</button>
          <button className='bg-slate-200 m-2 px-5 py-2 font-bold text-xl rounded cursor-pointer hover:bg-slate-500 hover:text-white' onClick={decrement}>-</button>
          <button className='bg-slate-200 m-2 px-5 py-2 font-bold text-xl rounded cursor-pointer hover:bg-slate-500 hover:text-white' onClick={multiplication}>X</button>
          <button className='bg-slate-200 m-2 px-5 py-2 font-bold text-xl rounded cursor-pointer hover:bg-slate-500 hover:text-white' onClick={division}>/</button>
        </div>
        <p className='bg-green-200 rounded p-2 font-bold'>{message}</p>
       </div>
    </div>
  )
}

export default App
