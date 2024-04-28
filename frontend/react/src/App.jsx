import { useEffect, useState } from 'react'


function App() {

const [Data , setdata] = useState()

async function fetchdata()
{
try {  
const res = await fetch("http://localhost:5000/api/data"); 
const data  = await res.json() 
console.log(data);
setdata(data)
} catch (error) {
  console.log(error);  
}
}

useEffect(()=>{
fetchdata()
} , 
[])

return (
    <>
     <div>
      <h1>Frontend</h1>
     {Data.message}
     </div>
    </>
  )
}

export default App
