import React, { useReducer, useState } from 'react'

const App = () => {



// const [userInfo, setUserInfo] = useState({
//   name:'',
//   phone:'',
//   email:''
// })

//   // 
// const userUpdateInfo=(e)=>{
//      setUserInfo({...userInfo, [e.target.name] : e.target.value})
// }


const initialState = {
  name:'',
  email:'',
  phone:''
}


// 
const reducer = (state, action)=>{
    switch(action.type){
        case "FIELD_UPDATE" :
        return {
          ...state,
           [action.payLoad.field] : action.payLoad.value,
        };
        // 
        case "CLEAR":
          return {
            ...state, [action.payLoad.field] : "",
          };
        // 
        case "RESET":
          return initialState;
        // 
        default : state;

    }
};

// 
const [userInfo, dispatch] = useReducer(reducer, initialState);
console.log(userInfo);

// 
const handleOnChange = (e)=>{
  dispatch({
       type:"FIELD_UPDATE",
        payLoad : {
    field:e.target.name,
    value:e.target.value
  }
  })
 
}


const handleClear =(field)=>{
  console.log(field);
      dispatch({
       type:"CLEAR",
        payLoad : {
          field
  }
  })
}



// 
const handleSubmit =(e)=>{
   e.preventDefault();
   console.log(userInfo);
}


  // 
  return (
    <div className="">
      {/*  */}
      <form onClick={handleSubmit} className='flex flex-col gap-1 justify-center items-center'>
        {/* name*/}
          <div className='flex justify-start flex-col gap-2'>
               <label htmlFor="name">Name</label>
               <input
                className='border-2'
                 type="text"
                 name="name"
                 id="name"
                 value={userInfo?.name}
                 onChange={handleOnChange}
                />
                <button onClick={()=>handleClear("name")} className='border-2 px-3 py-2 bg-red-200 rounded-2xl mt-3'>Clear</button>
          </div>
          {/* email */}
           <div className='flex justify-start flex-col gap-2'>
               <label htmlFor="email">Email</label>
               <input className='border-2' type="email" 
                  name="email" 
                  id="email"
                  value={userInfo?.email}
                  onChange={handleOnChange} 
                  />
                <button onClick={()=>handleClear("email")} className='border-2 px-3 py-2 bg-red-200 rounded-2xl mt-3'>Clear</button>
          </div>
          {/*  phone*/}
            <div className='flex justify-start flex-col gap-2'>
               <label htmlFor="phone">Phone</label>
               <input className='border-2' type="text"
                  name="phone" 
                  id="phone"
                  value={userInfo?.phone}
                  onChange={handleOnChange}
                  />
                <button onClick={()=>handleClear("phone")} className='border-2 px-3 py-2 bg-red-200 rounded-2xl mt-3'>Clear</button>
          </div>
            <button onClick={()=>dispatch({type:"RESET"})} className='border-2 px-3 py-2 bg-red-200 rounded-2xl mt-3'>reset</button>
            <button type='submit' className='border-2 px-3 py-2 bg-amber-200 rounded-2xl mt-3'>Submit</button>
      </form>

    </div>
  )
}

export default App