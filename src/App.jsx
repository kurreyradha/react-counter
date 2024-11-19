// import { useState } from "react";
// const App=()=>{

//   const [city,setCity]=useState("bhopal");

//   const myval=()=>{

//   setCity("indore")
//   }
//   return(

//     <>
//     <h1>welcome to :{city}</h1>
//     <button onClick={myval}>click</button>
//     </>
//   )
// }


// export default App;



////===================================================================================================






// import { useState } from "react";
// const App=()=>{

//   const [color,setColor]=useState("red");

 

 
  
//   return(

//     <>
//     <h1 style={{color:color}}>my favorite :{color}</h1>
//     <button onClick={()=>{setColor("green")}}>green</button>
//     <button onClick={()=>{setColor("blue")}}>blue</button>
//     <button onClick={()=>{setColor("orange")}}>orange</button>
//     <button onClick={()=>{setColor("yellow")}}>yellow</button>
//     </>
//   )

// }
// export default App;



///============================================================================================================



import { useState } from "react";
const App=()=>{

  const [cnt,setCnt]=useState(0);

  const myInc=()=>{

  setCnt(cnt+1)
  }


  const myDec=()=>{

    if(cnt<=0)
    {
      alert("you can not decrement less than zero")
    }
    else{
      setCnt(cnt-1)
    }
  }
  return(

    <>
    <center>

      <h1>my counter:{cnt}</h1>
    
    <button onClick={myInc}>increment</button>
    <button onClick={myDec}>decrement</button>
    <button onClick={()=>{setCnt(0)}}>reset</button>
    </center>
    </>
  )
}


export default App;
