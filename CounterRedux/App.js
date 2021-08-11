import React, { Component } from 'react'

// import { createStore } from 'redux';
import CounterApp from './src/CounterApp';
import { Provider } from 'react-redux';
import store from './Reducers/index';

// const initalstate={
//   counter:10
// }

// const reducer =(state=initalstate,action)=>{
//   switch (action.type) {
//     case 'INCREASE_COUNTER':
//         return{counter:state.counter+1}
//     case 'DECREASE_COUNTER':
//       return{counter:state.counter-1}
//     default:
//       return state;
//   }
  
// }

// const store=createStore(reducer);

class App extends Component{


  render(){

        return(
          <Provider store={store}>

            <CounterApp />
          </Provider>
        )
  }
}
export default App;