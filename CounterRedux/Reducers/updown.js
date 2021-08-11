const initalstate={
    counter:0
  }
  
const reducer =(state=initalstate,action)=>{
    switch (action.type) {
      case 'INCREASE_COUNTER':
          return{
            counter:state.counter+1,
            payload:action.payload
          }
      case 'DECREASE_COUNTER':
        return{counter:state.counter-1,
          payload:action.payload}
      default:
        return state;
    }
    
  }

  export default reducer;