// function curring
const logger =(state)=>(next)=>(action)=>{
    console.info("previous state" , state.getState());
    console.group(action.type)
    console.log(action);
     let result =  next(action);
     console.info("Next State", state.getState());
     console.groupEnd();
     return result;
}

export default logger;