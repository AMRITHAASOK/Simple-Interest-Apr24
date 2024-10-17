
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react'
function App() {
  //to hold amount , year , rate interest values from the user input field
      const [amount,setAmount] = useState("")
      const [year,setYear] = useState("")
      const [rate,setRate] = useState("")
  //it will update after the calculation
      const [interest,setinterest] = useState("")
    console.log(amount,year,rate);

  const handleInterest=()=>{
      const output=amount*year*rate/100
      setinterest(output)
  }
  const handleReset=()=>{
    setAmount('')
    setRate('')
    setYear('')
    setinterest(0)
  }

  return (
    <>
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8">
      <div className='border border-black rounded m-5 p-5 text-center' style={{backgroundColor:'greenyellow'}}>
        <h3 className='text-center'>Simple Interest Calculator</h3>
        <p className='text-success'>Calculate your simple interest with us ❤️</p>

          <div className='bg-light border border-light rounded p-5 shadow w-75 mx-auto'>
            <h1>&#8377;{interest}</h1>
            <p>Your Total Interest</p>
          </div>
          {/* input box */}
          <div className='d-flex justify-content-between flex-column w-75 mx-auto my-3'>
          <TextField onChange={e=>setAmount(e.target.value)} value={amount} className='mb-2' id="outlined-basic" label="Amount" variant="outlined" />
          <TextField onChange={e=>setYear(e.target.value)} value={year}  className='mb-2' id="outlined-basic" label="Year" variant="outlined" />
          <TextField onChange={e=>setRate(e.target.value)} value={rate}  className='mb-2' id="outlined-basic" label="Interest" variant="outlined" />
          </div>
          {/* button */}
          <div className='d-flex justify-content-evenly'>
          <Button onClick={handleInterest} variant="contained" color="success" >Calculate</Button>
          <Button onClick={handleReset} variant="outlined" color="success">Reset</Button>
          </div>
     </div>
      </div>
      <div className="col-2"></div>
    </div>
    
     
    </>
  )
}

export default App
