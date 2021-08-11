const increment="Increment"
const decrement="Decrement"
export const increaseCounter=()=>{
    return{
        type:'INCREASE_COUNTER',
         payload:increment
    }
}
export const decreaseCounter=()=>{
    return{
        type:'DECREASE_COUNTER',
      payload:decrement
    }
}